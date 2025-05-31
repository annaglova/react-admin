// generate-edit-components.js
const fs = require("fs");
const path = require("path");
const resources = require("./src/resourcesList.json");

const MAIN_RESOURCES = resources.MAIN_RESOURCES;
const DICT_RESOURCES = resources.DICT_RESOURCES;
const ALL_RESOURCES = [...MAIN_RESOURCES, ...DICT_RESOURCES];

const EXCLUDE_FIELDS = [
  "id",
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
];

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

function toPascalCase(str) {
  return str
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

// ------ Supabase setup -----
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
  for (const table of ALL_RESOURCES) {
    // 1. Columns
    const { data: columns, error: colErr } = await supabase.rpc(
      "get_table_columns",
      { tablename: table }
    );
    if (colErr) {
      console.error(`Помилка колонок ${table}:`, colErr);
      continue;
    }
    if (!columns || !columns.length) continue;

    // 2. Foreign keys (RPC get_foreign_keys_from)
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

    // 3. Form fields
    const fields = columns.filter(
      (col) => !EXCLUDE_FIELDS.includes(col.column_name)
    );
    const importsSet = new Set(["SimpleForm", "Edit"]);
    const formFields = fields
      .map((col) => {
        if (fkMap[col.column_name]) {
          importsSet.add("ReferenceInput");
          importsSet.add("SelectInput");
          return `      <ReferenceInput source="${
            col.column_name
          }" reference="${fkMap[col.column_name]}">
        <SelectInput optionText="name" />
      </ReferenceInput>`;
        } else {
          const type = typeMap[col.data_type] || "TextInput";
          importsSet.add(type);
          return `      <${type} source="${col.column_name}" />`;
        }
      })
      .join("\n");

    // 4. Code
    const Name = toPascalCase(table);
    const dir = path.join("src", "resources", table);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const code = `import { ${Array.from(importsSet)
      .sort()
      .join(", ")} } from "react-admin";

export const ${Name}Edit = () => (
  <Edit>
    <SimpleForm>
${formFields}
    </SimpleForm>
  </Edit>
);
`;
    const fileName = `${Name}Edit.tsx`;
    fs.writeFileSync(path.join(dir, fileName), code);
    console.log(`✅ Створено: ${fileName} у ${dir}`);
  }
  console.log(
    "🎉 Всі Edit-файли згенеровано в src/resources/<resource>/<Name>Edit.tsx"
  );
})();
