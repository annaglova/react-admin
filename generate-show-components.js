require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const SKIP_MARK = "// @MANUAL";

// 1. Читаємо ресурси з JSON
const resources = require("./src/resourcesList.json");
const ALL_RESOURCES = [
  ...resources.MAIN_RESOURCES,
  ...resources.DICT_RESOURCES,
];

// 2. Поля для виключення
const EXCLUDE_FIELDS = [
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
];

// 3. Мапа postgres → React Admin Field
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

// 4. Підключення до Supabase
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
    // формуємо map: column_name -> ref_table
    const fkMap = {};
    if (Array.isArray(foreignKeys)) {
      for (const fk of foreignKeys) {
        fkMap[fk.column_name] = fk.ref_table;
      }
    }

    // 3. Генеруємо імпорт
    const uniqueFieldTypes = Array.from(
      new Set(
        columns
          .map((f) =>
            fkMap[f.column_name]
              ? "ReferenceField"
              : typeMap[f.data_type] || "TextField"
          )
          .concat(["SimpleShowLayout", "Show", "TextField"])
      )
    );
    const imports = [...uniqueFieldTypes].sort().join(", ");

    // 4. Генерація полів
    const fields = columns.filter(
      (col) => !EXCLUDE_FIELDS.includes(col.column_name)
    );
    const showFields = fields
      .map((col) => {
        if (fkMap[col.column_name]) {
          // ReferenceField якщо є зовнішній ключ
          const refTable = fkMap[col.column_name];
          return `      <ReferenceField source="${col.column_name}" reference="${refTable}">
        <TextField source="name" />
      </ReferenceField>`;
        } else {
          // Звичайне поле
          const type = typeMap[col.data_type] || "TextField";
          return `      <${type} source="${col.column_name}" />`;
        }
      })
      .join("\n");

    // 5. Генерація файлу
    const Name = toPascalCase(table);
    const dir = path.join("src", "resources", table);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const code = `import { ${imports} } from "react-admin";

export const ${Name}Show = () => (
  <Show>
    <SimpleShowLayout>
${showFields}
    </SimpleShowLayout>
  </Show>
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
    "🎉 Всі Show-файли згенеровано в src/resources/<resource>/<Name>Show.tsx"
  );
})();
