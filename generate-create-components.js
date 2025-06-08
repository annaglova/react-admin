// generate-create-components.js
const fs = require("fs");
const path = require("path");

const SKIP_MARK = "// @MANUAL";
const typeMap = {
  integer: "NumberInput",
  bigint: "NumberInput",
  smallint: "NumberInput",
  serial: "NumberInput",
  uuid: "TextInput",
  text: "TextInput",
  varchar: "TextInput",
  "character varying": "TextInput",
  "timestamp without time zone": "DateInput",
  "timestamp with time zone": "DateInput",
  date: "DateInput",
  boolean: "BooleanInput",
  jsonb: "TextInput",
  json: "TextInput",
  "double precision": "NumberInput",
  numeric: "NumberInput",
};

// 1. Читаємо ресурси
const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES || [];
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES || [];
const CHILD_RESOURCES = resources.CHILD_RESOURCES || [];
const ALL_RESOURCES = [
  ...MAIN_RESOURCES,
  ...LOOKUP_RESOURCES,
  ...CHILD_RESOURCES,
];

// 2. Валідатори
const validators = JSON.parse(
  fs.readFileSync(path.join("src", "validators.json"), "utf-8")
);

// 3. EXCLUDE поля для генерації (як і було)
const EXCLUDE_FIELDS = [
  "id",
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
];

// Допоміжна для типу PascalCase
function toPascalCase(str) {
  return str
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

// Групування полів: name — окремо, решта — по колонках
function groupColumns(cols, exclude = []) {
  const filtered = cols.filter((c) => !exclude.includes(c.name));
  const nameCol =
    filtered.find((c) => c.name === "name") ||
    filtered.find((c) => c.name === "title") ||
    filtered.find((c) => c.name === "label") ||
    filtered.find((c) => c.name === "value");
  const rest = filtered.filter(
    (c) => !["name", "title", "label", "value"].includes(c.name)
  );
  return { nameCol, rest };
}

// Валідатори (required)
function getValidatorsForField(table, field) {
  const tableValidators = validators[table] || {};
  const config = tableValidators[field] || {};
  const v = [];
  if (config.isRequired) v.push("required()");
  if (v.length === 0) return "";
  if (v.length === 1) return `validate={${v[0]}}`;
  return `validate={[${v.join(", ")}]}`;
}

for (const table of ALL_RESOURCES) {
  // 1. Читаємо json по таблиці
  const dir = path.join("src", "resources", table);
  const metaPath = path.join(dir, `${table}.json`);
  if (!fs.existsSync(metaPath)) {
    console.warn(`⚠️ Пропущено: ${table} (нема ${table}.json)`);
    continue;
  }
  const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  const fieldsRaw = meta.fields || [];
  // Визначаємо foreign keys (isFk/ref)
  const fkMap = {};
  for (const f of fieldsRaw) {
    if (f.isFk && f.ref) fkMap[f.name] = f.ref;
  }

  // 2. Групуємо поля для компонента
  const { nameCol, rest } = groupColumns(fieldsRaw, EXCLUDE_FIELDS);
  const mid = Math.ceil(rest.length / 2);
  const leftFields = rest.slice(0, mid);
  const rightFields = rest.slice(mid);

  // 3. Генерація полів (з валідаторами)
  const importsSet = new Set(["ResourceCreateLayout", "required"]);
  function renderField(col) {
    const validate = getValidatorsForField(table, col.name);
    if (fkMap[col.name]) {
      importsSet.add("ReferenceInput");
      importsSet.add("SelectInput");
      return `<ReferenceInput source="${col.name}" reference="${
        fkMap[col.name]
      }">
  <SelectInput optionText="name" ${validate} />
</ReferenceInput>`;
    } else {
      const type = typeMap[col.type] || "TextInput";
      importsSet.add(type);
      return `<${type} source="${col.name}" ${validate} />`;
    }
  }

  // name field окремо
  const nameField = nameCol ? renderField(nameCol) : "";

  // Інші — по колонках
  const fieldsLeft = leftFields.map(renderField).join("\n          ");
  const fieldsRight = rightFields.map(renderField).join("\n          ");

  // 4. Генеруємо фінальний код
  const Name = toPascalCase(table);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const code = `import { ${Array.from(importsSet)
    .filter((x) => x !== "ResourceCreateLayout")
    .sort()
    .join(", ")} } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ${Name}Create = () => (
  <ResourceCreateLayout
    name={
      ${nameField ? `<>{${nameField}}</>` : "null"}
    }
    fieldsLeft={
      <>
        ${fieldsLeft}
      </>
    }
    fieldsRight={
      <>
        ${fieldsRight}
      </>
    }
  />
);
`;

  const fileName = `${Name}Create.tsx`;
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
  "🎉 Всі Create-файли згенеровано в src/resources/<resource>/<Name>Create.tsx"
);
