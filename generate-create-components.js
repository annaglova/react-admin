const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES;
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES;
const ALL_RESOURCES = [...MAIN_RESOURCES, ...LOOKUP_RESOURCES];

const SKIP_MARK = "// @MANUAL";
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

// Групуємо поля: name — окремо, решта — по колонках
function groupColumns(cols, exclude = []) {
  const filtered = cols.filter((c) => !exclude.includes(c.column_name));
  const nameCol =
    filtered.find((c) => c.column_name === "name") ||
    filtered.find((c) => c.column_name === "title") ||
    filtered.find((c) => c.column_name === "label") ||
    filtered.find((c) => c.column_name === "value");
  const rest = filtered.filter(
    (c) => !["name", "title", "label", "value"].includes(c.column_name)
  );
  return { nameCol, rest };
}

// --------- SUPABASE ---------
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

    // 3. Групуємо поля
    const { nameCol, rest } = groupColumns(columns, EXCLUDE_FIELDS);
    const mid = Math.ceil(rest.length / 2);
    const leftFields = rest.slice(0, mid);
    const rightFields = rest.slice(mid);

    // 4. Генерація полів
    const importsSet = new Set(["ResourceCreateLayout"]);
    function renderField(col) {
      if (fkMap[col.column_name]) {
        importsSet.add("ReferenceInput");
        importsSet.add("SelectInput");
        return `<ReferenceInput source="${col.column_name}" reference="${
          fkMap[col.column_name]
        }">
  <SelectInput optionText="name" />
</ReferenceInput>`;
      } else {
        const type = typeMap[col.data_type] || "TextInput";
        importsSet.add(type);
        return `<${type} source="${col.column_name}" />`;
      }
    }

    // name field окремо
    const nameField = nameCol ? renderField(nameCol) : "";

    // Інші — по колонках
    const fieldsLeft = leftFields.map(renderField).join("\n          ");
    const fieldsRight = rightFields.map(renderField).join("\n          ");

    // 5. Генеруємо фінальний код
    const Name = toPascalCase(table);
    const dir = path.join("src", "resources", table);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const code = `import { ${Array.from(importsSet)
      .filter((x) => x !== "ResourceCreateLayout") // <-- тут фільтруємо!
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
})();
