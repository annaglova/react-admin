const fs = require("fs");
const path = require("path");
const SKIP_MARK = "// @MANUAL";

// --- Налаштування ---
const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES || [];
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES || [];
const ALL_RESOURCES = [...MAIN_RESOURCES, ...LOOKUP_RESOURCES];

// Тільки ці поля не показувати в таблиці
const EXCLUDE_FIELDS = [
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
  "updated_at",
  "created_at",
];

// --- Завантажуємо валідатори окремо ---
const validators = JSON.parse(
  fs.readFileSync(path.join("src", "validators.json"), "utf-8")
);

// Мапа postgres → React Admin Field
const typeMap = {
  integer: "NumberField",
  bigint: "NumberField",
  smallint: "NumberField",
  serial: "NumberField",
  uuid: "TextField",
  text: "TextField",
  varchar: "TextField",
  "character varying": "TextField",
  "timestamp without time zone": "DateField",
  "timestamp with time zone": "DateField",
  date: "DateField",
  boolean: "BooleanField",
  jsonb: "TextField",
  json: "TextField",
  "double precision": "NumberField",
  numeric: "NumberField",
};

function toPascalCase(str) {
  return str
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function getColumnLabel(fieldName, table) {
  // Підтягуємо isRequired із validators.json, якщо такий є
  const tableValidators = validators[table] || {};
  const isRequired = !!tableValidators[fieldName]?.isRequired;
  const label = fieldName
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return isRequired ? `${label} *` : label;
}

function getMetaJson(table) {
  const filePath = path.join("src", "resources", table, `${table}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Meta JSON for table "${table}" not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function buildFieldMap(fields) {
  // name -> fieldMeta
  return Object.fromEntries(fields.map((f) => [f.name, f]));
}

for (const table of ALL_RESOURCES) {
  // 1. Читаємо структуру з json
  const meta = getMetaJson(table);

  // listFields — з custom.listFields, або всі крім EXCLUDE_FIELDS (якщо порожній)
  let listFieldNames = (meta.custom?.listFields || []).filter(Boolean);

  if (listFieldNames.length === 0) {
    listFieldNames = meta.fields
      .map((f) => f.name)
      .filter((name) => !EXCLUDE_FIELDS.includes(name));
  }

  const fieldMetaMap = buildFieldMap(meta.fields);

  // 2. Готуємо імпорти і поля
  const usedTypes = new Set(["Datagrid", "List", "TextInput", "Pagination"]);
  const datagridFields = listFieldNames
    .map((fieldName) => {
      const meta = fieldMetaMap[fieldName];
      if (!meta) return null;
      let fieldType = typeMap[meta.type] || "TextField";
      usedTypes.add(fieldType);

      // --- Валідатори підтягуємо з validators.json ---
      const columnLabel = getColumnLabel(meta.name, table);

      // Foreign Key
      if (meta.isFk && meta.ref) {
        usedTypes.add("ReferenceField");
        return `      <ReferenceField source="${meta.name}" reference="${meta.ref}" label="${columnLabel}">
        <TextField source="name" />
      </ReferenceField>`;
      }
      return `      <${fieldType} source="${meta.name}" label="${columnLabel}" />`;
    })
    .filter(Boolean)
    .join("\n");

  // 3. Генеруємо фільтри (basic)
  const filters = [
    `<TextInput label="Пошук по імені" source="name" alwaysOn />,`,
    `<TextInput label="Пошук по id" source="id" />,`,
  ].join("\n  ");

  // 4. Записуємо файл
  const Name = toPascalCase(table);
  const dir = path.join("src", "resources", table);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const code = `import { ${Array.from(usedTypes)
    .sort()
    .join(", ")} } from "react-admin";

const ${Name}Filters = [
  ${filters}
];

export const ${Name}List = () => (
  <List filters={${Name}Filters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
${datagridFields}
    </Datagrid>
  </List>
);
`;

  const fileName = `${Name}List.tsx`;
  const filePath = path.join(dir, fileName);

  // --- SKIP якщо ручна мітка ---
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8");
    if (content.includes(SKIP_MARK)) {
      console.log(`⏭️ Пропущено ${fileName} (ручна мітка @MANUAL)`);
      continue;
    }
  }

  fs.writeFileSync(filePath, code);
  console.log(`✅ Створено: ${fileName} у ${dir}`);
}
console.log(
  "🎉 Всі List-файли згенеровано в src/resources/<resource>/<Name>List.tsx"
);
