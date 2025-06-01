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
  "updated_at",
  "created_at",
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
  // Наприклад: account_in_tag -> Account In Tag
  return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// Головна функція для вибору кращих колонок
function groupColumns(cols, extraExclude = []) {
  const fullExclude = [...EXCLUDE_FIELDS, ...extraExclude];

  // Всі без технічних та зайвих
  const filteredCols = cols.filter((c) => !fullExclude.includes(c.column_name));

  const idCol = filteredCols.find((c) => c.column_name === "id");
  const nameCol =
    filteredCols.find((c) => c.column_name === "name") ||
    filteredCols.find((c) => c.column_name === "title") ||
    filteredCols.find((c) => c.column_name === "label") ||
    filteredCols.find((c) => c.column_name === "value");

  // Всі, крім id і name-type
  const restCols = filteredCols.filter(
    (c) =>
      c.column_name !== "id" &&
      c.column_name !== (nameCol && nameCol.column_name)
  );

  // Повертаємо масив: id, nameCol, решта
  return [idCol, nameCol, ...restCols].filter(Boolean);
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

    // 3. Detail-таблиці (children — ті, що мають FK на цей MAIN)
    let detailsConfigsJsx = "[]";
    if (MAIN_RESOURCES.includes(table)) {
      const { data: details, error: detErr } = await supabase.rpc(
        "get_foreign_keys_to",
        { table_name: table }
      );
      if (detErr) {
        console.error(`Помилка detail-таблиць ${table}:`, detErr);
      } else if (Array.isArray(details) && details.length) {
        // Групуємо по table_name
        const map = {};
        for (const d of details) {
          if (!map[d.table_name]) map[d.table_name] = [];
          map[d.table_name].push(d.column_name);
        }
        const detailTables = Object.entries(map).map(
          ([tableName, columns]) => ({
            tableName,
            fkColumns: columns,
          })
        );

        // Генеруємо detailsConfigs
        const configs = [];

        for (const dt of detailTables) {
          const detailColumnsResp = await supabase.rpc("get_table_columns", {
            tablename: dt.tableName,
          });
          const detailColumns = detailColumnsResp.data || [];

          // fk для дочірньої таблиці
          const fkMapDetail = {};
          const { data: fkDetailData } = await supabase.rpc(
            "get_foreign_keys_from",
            { table_name: dt.tableName }
          );
          if (Array.isArray(fkDetailData)) {
            for (const fk of fkDetailData) {
              fkMapDetail[fk.column_name] = fk.ref_table;
            }
          }

          // Виключаємо target колонки
          const bestCols = groupColumns(detailColumns, dt.fkColumns);

          const datagridFields = bestCols
            .map((col) => {
              if (
                col.column_name.endsWith("_id") &&
                fkMapDetail[col.column_name]
              ) {
                return `<ReferenceField source="${
                  col.column_name
                }" reference="${
                  fkMapDetail[col.column_name]
                }"><TextField source="name" /></ReferenceField>`;
              }
              const type = typeMap[col.data_type] || "TextField";
              return `<${type} source="${col.column_name}" />`;
            })
            .join("\n              ");

          configs.push(`
      {
        label: ${JSON.stringify(
          labelFor(dt.tableName)
            .replace(/^"(.+)"$/, "$1")
            .replace(/['"]/g, "")
        )},
        content: (
          <ReferenceManyField reference={${JSON.stringify(
            dt.tableName
          )}} target={${JSON.stringify(
            dt.fkColumns[0]
          )}} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              ${datagridFields}
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          `);
        }

        detailsConfigsJsx = `[${configs.join(",\n        ")}]`;
      }
    }

    // 4. Імпортовані компоненти
    const importsSet = new Set([
      "TextField",
      "NumberField",
      "BooleanField",
      "DateField",
    ]);
    // ReferenceField якщо є FK
    if (columns.some((f) => fkMap[f.column_name]))
      importsSet.add("ReferenceField");
    // Для MAIN — додаємо компоненти табів
    if (MAIN_RESOURCES.includes(table)) {
      importsSet.add("Tab");
      importsSet.add("ReferenceManyField");
      importsSet.add("Datagrid");
      importsSet.add("Pagination");
    }

    // 5. Name/id поля як Labeled
    const nameField = `<Labeled label="Name" value={<TextField source="name" />} />`;
    const idField = `<Labeled label="ID" value={<TextField source="id" />} />`;

    // 6. Основні поля, дві колонки
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

    // 7. Layout imports
    const layoutImport = MAIN_RESOURCES.includes(table)
      ? `import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";`
      : `import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";`;

    const layoutName = MAIN_RESOURCES.includes(table)
      ? "MainResourceShowLayout"
      : "LookupResourceShowLayout";

    // 8. Формуємо фінальний код компонента
    const Name = toPascalCase(table);
    const dir = path.join("src", "resources", table);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let code = `// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ${Array.from(importsSet).sort().join(", ")} } from "react-admin";
import { Labeled } from "@/components/Labeled";
${layoutImport}

`;

    if (MAIN_RESOURCES.includes(table)) {
      code += `
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
    detailsConfigs={
      ${detailsConfigsJsx}
    }
  />
);
`;
    } else {
      // LOOKUP — old style
      code += `
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
})();
