// generate-show-components.js
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const SKIP_MARK = "// @MANUAL";

const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES;
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES || [];
const ALL_RESOURCES = [...MAIN_RESOURCES, ...LOOKUP_RESOURCES];

const EXCLUDE_FIELDS = [
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
];

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

function labelFor(str) {
  return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
  for (const table of ALL_RESOURCES) {
    // 1. Колонки таблиці
    const { data: columns, error: colErr } = await supabase.rpc(
      "get_table_columns",
      { tablename: table }
    );
    if (colErr) {
      console.error(`Помилка колонок ${table}:`, colErr);
      continue;
    }
    if (!columns || !columns.length) {
      console.warn(`Таблиця ${table} без колонок, пропуск...`);
      continue;
    }

    // 2. Foreign keys для цієї таблиці (RPC get_foreign_keys_from)
    const { data: foreignKeys, error: fkErr } = await supabase.rpc(
      "get_foreign_keys_from",
      { table_name: table }
    );
    if (fkErr) {
      console.error(`Помилка foreign keys ${table}:`, fkErr);
      continue;
    }
    const fkMap = {};
    if (Array.isArray(foreignKeys)) {
      for (const fk of foreignKeys) {
        fkMap[fk.column_name] = fk.ref_table;
      }
    }

    // 3. Імпортовані компоненти
    const imports = [
      "ReferenceField",
      "TextField",
      "NumberField",
      "BooleanField",
      "DateField",
    ].filter((imp) =>
      columns.some(
        (f) =>
          typeMap[f.data_type] === imp ||
          (imp === "ReferenceField" && fkMap[f.column_name])
      )
    );

    // 4. Name/id поля як Labeled
    const nameField = `<Labeled label="Name" value={<TextField source="name" />} />`;
    const idField = `<Labeled label="ID" value={<TextField source="id" />} />`;

    // 5. Основні поля, дві колонки
    const fields = columns.filter(
      (col) =>
        !EXCLUDE_FIELDS.includes(col.column_name) &&
        col.column_name !== "name" &&
        col.column_name !== "id"
    );
    const mid = Math.ceil(fields.length / 2);
    const leftFields = fields.slice(0, mid);
    const rightFields = fields.slice(mid);

    function genField(col) {
      const label = labelFor(col.column_name);
      if (fkMap[col.column_name]) {
        const refTable = fkMap[col.column_name];
        return `<Labeled label="${label}" value={<ReferenceField source="${col.column_name}" reference="${refTable}"><TextField source="name" /></ReferenceField>} />`;
      } else {
        const type = typeMap[col.data_type] || "TextField";
        return `<Labeled label="${label}" value={<${type} source="${col.column_name}" />} />`;
      }
    }

    const fieldsLeft = leftFields.map(genField).join("\n        ");
    const fieldsRight = rightFields.map(genField).join("\n        ");

    // 6. Layout imports
    const layoutImport = MAIN_RESOURCES.includes(table)
      ? `import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";`
      : `import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";`;

    const layoutName = MAIN_RESOURCES.includes(table)
      ? "MainResourceShowLayout"
      : "LookupResourceShowLayout";

    // 7. Генеруємо компонент
    const Name = toPascalCase(table);
    const dir = path.join("src", "resources", table);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const code = `// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ${imports.join(", ")} } from "react-admin";
import { Labeled } from "@/components/Labeled";
${layoutImport}

export const ${Name}Show = ({ record }: any) => (
  <${layoutName}
    name={
      ${nameField}
    }
    id={
      ${idField}
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
})();
