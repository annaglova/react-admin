// generate-show-components.js
const fs = require("fs");
const path = require("path");

const SKIP_MARK = "// @MANUAL";
const EXCLUDE_FIELDS = [
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
  "updated_at",
  "created_at",
];

const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES || [];
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES || [];
const CHILD_RESOURCES = resources.CHILD_RESOURCES || [];
const ALL_RESOURCES = [
  ...MAIN_RESOURCES,
  ...LOOKUP_RESOURCES,
  ...CHILD_RESOURCES,
];

// !!! Для генерації валідаторів (зірочок)
const validators = JSON.parse(
  fs.readFileSync(path.join("src", "validators.json"), "utf-8")
);

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

function stripQuotes(str) {
  return typeof str === "string" && str.startsWith('"') && str.endsWith('"')
    ? str.slice(1, -1)
    : str;
}

function labelFor(str) {
  return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// Новий генератор “Labeled” поля
function genLabeledField({
  label,
  source,
  tableName,
  type = "TextField",
  isFk,
  ref,
}) {
  const fieldValidators = validators[tableName] || {};
  const isRequired = !!fieldValidators[source]?.isRequired;
  if (isFk && ref) {
    return `<Labeled label="${label}" required={${isRequired}} value={<ReferenceField source="${source}" reference="${ref}"><TextField source="name" /></ReferenceField>} />`;
  }
  return `<Labeled label="${label}" required={${isRequired}} value={<${type} source="${source}" />} />`;
}

// Формуємо кращі колонки (як раніше)
function groupColumns(fields, extraExclude = []) {
  const fullExclude = [...EXCLUDE_FIELDS, ...extraExclude];
  const filtered = fields.filter((c) => !fullExclude.includes(c.name));

  const idCol = filtered.find((c) => c.name === "id");
  const nameCol =
    filtered.find((c) => c.name === "name") ||
    filtered.find((c) => c.name === "title") ||
    filtered.find((c) => c.name === "label") ||
    filtered.find((c) => c.name === "value");

  const rest = filtered.filter(
    (c) => c.name !== "id" && (!nameCol || c.name !== nameCol.name)
  );

  return [idCol, nameCol, ...rest].filter(Boolean);
}

// Завантажуємо json для таблиці
function loadTableJson(table) {
  const filePath = path.join("src", "resources", table, `${table}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

for (const table of ALL_RESOURCES) {
  // 1. json головної таблиці
  const tableJson = loadTableJson(table);
  const fields = tableJson.fields || [];
  const detailsTabs = tableJson.detailsTabs || [];
  const tableValidators = validators[table] || {};

  // fkMap: поле → reference
  const fkMap = {};
  fields.forEach((f) => {
    if (f.isFk && f.ref) fkMap[f.name] = f.ref;
  });

  // 2. Генеруємо detailsConfigs (для MAIN)
  let detailsConfigsJsx = "[]";
  if (
    MAIN_RESOURCES.includes(table) &&
    Array.isArray(detailsTabs) &&
    detailsTabs.length
  ) {
    const configs = [];
    for (const tab of detailsTabs) {
      // Для кожної вкладки беремо fields і визначаємо fkMap
      const childFields = tab.fields || [];
      const childFkMap = {};
      childFields.forEach((f) => {
        if (f.isFk && f.ref) childFkMap[f.name] = f.ref;
      });
      const bestCols = groupColumns(
        childFields,
        Array.isArray(tab.fk) ? tab.fk : [tab.fk]
      );
      const childValidators = validators[tab.resource] || {};
      const datagridFields = bestCols
        .map((col) => {
          // Динамічно підтягуємо required із validators.json (як у genLabeledField)
          const isRequired = !!childValidators[col.name]?.isRequired;
          const columnLabel = labelFor(col.name) + (isRequired ? " *" : "");
          if (col.isFk && childFkMap[col.name]) {
            const refTable = stripQuotes(childFkMap[col.name]);
            return `<ReferenceField source="${col.name}" reference="${refTable}" label="${columnLabel}"><TextField source="name" /></ReferenceField>`;
          }
          const type = typeMap[col.type] || "TextField";
          return `<${type} source="${col.name}" label="${columnLabel}" />`;
        })
        .join("\n              ");
      const safeResource = stripQuotes(tab.resource);
      const safeTarget = Array.isArray(tab.fk)
        ? stripQuotes(tab.fk[0])
        : stripQuotes(tab.fk);
      const createButton = `<ChildCreateButton resource="${safeResource}" fkField="${safeTarget}" />`;
      configs.push(`
  {
    label: ${JSON.stringify(labelFor(safeResource))},
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          ${createButton}
        </div>
        <ReferenceManyField reference="${safeResource}" target="${safeTarget}" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            ${datagridFields}
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
`);
    }
    detailsConfigsJsx = `[${configs.join(",\n        ")}]`;
  }

  // --- Формуємо імпорти через Set
  const importsSet = new Set([
    "TextField",
    "NumberField",
    "BooleanField",
    "DateField",
  ]);
  if (fields.some((f) => f.isFk)) importsSet.add("ReferenceField");
  if (MAIN_RESOURCES.includes(table) && detailsTabs.length) {
    importsSet.add("ReferenceManyField");
    importsSet.add("Datagrid");
    importsSet.add("Pagination");
  }

  // layoutImport
  let layoutImport, layoutName;
  let customImports = "";
  if (MAIN_RESOURCES.includes(table)) {
    layoutImport = `import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";`;
    layoutName = "MainResourceShowLayout";
    customImports += `import { ChildCreateButton } from "@/components/ChildCreateButton";\n`;
  } else if (LOOKUP_RESOURCES.includes(table)) {
    layoutImport = `import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";`;
    layoutName = "LookupResourceShowLayout";
  } else if (CHILD_RESOURCES.includes(table)) {
    layoutImport = `import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";`;
    layoutName = "ChildResourceShowLayout";
  } else {
    throw new Error(`Таблиця ${table} не знайдена в MAIN/LOOKUP/CHILD`);
  }

  // 3. Name/id поля як Labeled (чи null)
  const nameField = fields.find((f) => f.name === "name")
    ? genLabeledField({
        label: "Name",
        source: "name",
        tableName: table,
        type: "TextField",
        isFk: !!fkMap["name"],
        ref: fkMap["name"],
      })
    : null;
  const idField = fields.find((f) => f.name === "id")
    ? genLabeledField({
        label: "ID",
        source: "id",
        tableName: table,
        type: "TextField",
        isFk: !!fkMap["id"],
        ref: fkMap["id"],
      })
    : null;

  // 4. Основні поля, дві колонки
  const baseFields = fields.filter(
    (col) =>
      !EXCLUDE_FIELDS.includes(col.name) &&
      col.name !== "name" &&
      col.name !== "id"
  );
  const mid = Math.ceil(baseFields.length / 2);
  const leftFields = baseFields.slice(0, mid);
  const rightFields = baseFields.slice(mid);

  function genField(col, tableName) {
    const label = labelFor(col.name); // Без додаткової зірочки!
    const type = typeMap[col.type] || "TextField";
    return genLabeledField({
      label,
      source: col.name,
      tableName,
      type,
      isFk: !!fkMap[col.name],
      ref: fkMap[col.name],
    });
  }

  const fieldsLeft = leftFields
    .map((col) => genField(col, table))
    .join("\n        ");
  const fieldsRight = rightFields
    .map((col) => genField(col, table))
    .join("\n        ");

  // --- Генеруємо фінальний код
  const Name = toPascalCase(table);
  const dir = path.join("src", "resources", table);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  let code = `// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { ${Array.from(importsSet).sort().join(", ")} } from "react-admin";
import { Labeled } from "@/components/Labeled";
${layoutImport}
${customImports}
`;

  if (MAIN_RESOURCES.includes(table)) {
    code += `
export const ${Name}Show = ({ record }: any) => (
  <${layoutName}
    name={
      ${nameField || "null"}
    }
    id={
      ${idField || "null"}
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
    detailsConfigs={
      ${detailsConfigsJsx}
    }
  />
);
`;
  } else {
    // LOOKUP/CHILD
    code += `
export const ${Name}Show = ({ record }: any) => (
  <${layoutName}
    name={
      ${nameField || "null"}
    }
    id={
      ${idField || "null"}
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
  }

  const fileName = `${Name}Show.tsx`;
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
  "🎉 Всі Show-файли згенеровано в src/resources/<resource>/<Name>Show.tsx"
);
