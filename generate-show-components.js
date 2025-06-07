// generate-show-components.js
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const SKIP_MARK = "// @MANUAL";

const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES || [];
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES || [];
const CHILD_RESOURCES = resources.CHILD_RESOURCES || [];
const ALL_RESOURCES = [
  ...MAIN_RESOURCES,
  ...LOOKUP_RESOURCES,
  ...CHILD_RESOURCES,
];
const EXCLUDE_FIELDS = [
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
  "updated_at",
  "created_at",
];

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
  // Забирає зовнішні подвійні лапки якщо є
  return typeof str === "string" && str.startsWith('"') && str.endsWith('"')
    ? str.slice(1, -1)
    : str;
}

function labelFor(str) {
  // Наприклад: account_in_tag -> Account In Tag
  return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function genLabeledField({
  label,
  source,
  tableName,
  type = "TextField",
  fkMap,
}) {
  const fieldValidators = validators[tableName] || {};
  const isRequired = !!fieldValidators[source]?.isRequired;
  // Якщо це foreign key:
  if (fkMap && fkMap[source]) {
    const refTable = fkMap[source];
    return `<Labeled label="${label}" required={${isRequired}} value={<ReferenceField source="${source}" reference="${refTable}"><TextField source="name" /></ReferenceField>} />`;
  }
  // Просто поле:
  return `<Labeled label="${label}" required={${isRequired}} value={<${type} source="${source}" />} />`;
}

function getColumnLabel(field, tableName) {
  const fieldValidators = validators[tableName] || {};
  const isRequired = !!fieldValidators[field]?.isRequired;
  const label = labelFor(field);
  return isRequired ? `${label} *` : label;
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

          const safeResource = stripQuotes(dt.tableName);
          const safeReference = stripQuotes(dt.tableName);
          const safeTarget = stripQuotes(dt.fkColumns[0]);

          const fkField = dt.fkColumns[0];
          const createButton = `<ChildCreateButton resource="${safeResource}" fkField="${fkField}" />`;

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
          const bestCols = groupColumns(detailColumns, dt.fkColumns);
          const datagridFields = bestCols
            .map((col) => {
              const columnLabel = getColumnLabel(col.column_name, dt.tableName);
              if (
                col.column_name.endsWith("_id") &&
                fkMapDetail[col.column_name]
              ) {
                const refTable = fkMapDetail[col.column_name];
                return `<ReferenceField source="${col.column_name}" reference="${refTable}" label="${columnLabel}"><TextField source="name" /></ReferenceField>`;
              }
              const type = typeMap[col.data_type] || "TextField";
              return `<${type} source="${col.column_name}" label="${columnLabel}" />`;
            })
            .join("\n              ");
          configs.push(`
  {
    label: ${JSON.stringify(labelFor(safeResource))},
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          ${createButton}
        </div>
        <ReferenceManyField reference="${safeReference}" target="${safeTarget}" record={record} perPage={15}  pagination={<Pagination />}>
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
    }

    // 4. Імпортовані компоненти
    const importsSet = new Set([
      "TextField",
      "NumberField",
      "BooleanField",
      "DateField",
    ]);
    if (columns.some((f) => fkMap[f.column_name]))
      importsSet.add("ReferenceField");
    if (MAIN_RESOURCES.includes(table)) {
      importsSet.add("Tab");
      importsSet.add("ReferenceManyField");
      importsSet.add("Datagrid");
      importsSet.add("Pagination");
      importsSet.add("CreateButton");
    }

    // 5. Name/id поля як Labeled
    const nameField = genLabeledField({
      label: "Name",
      source: "name",
      tableName: table,
      type: "TextField",
    });
    const idField = genLabeledField({
      label: "ID",
      source: "id",
      tableName: table,
      type: "TextField",
    });

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

    function genField(col, tableName) {
      const label = labelFor(col.column_name);
      const type = typeMap[col.data_type] || "TextField";
      return genLabeledField({
        label,
        source: col.column_name,
        tableName,
        type,
        fkMap,
      });
    }

    const fieldsLeft = leftFields
      .map((col) => genField(col, table))
      .join("\n        ");
    const fieldsRight = rightFields
      .map((col) => genField(col, table))
      .join("\n        ");

    // 7. Layout imports + назва layout'а
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

    // 8. Формуємо фінальний код компонента
    const Name = toPascalCase(table);
    const dir = path.join("src", "resources", table);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let code = `// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ${Array.from(importsSet).sort().join(", ")} } from "react-admin";
import { Labeled } from "@/components/Labeled";
${layoutImport}
${customImports}

`;

    // MAIN має detailsConfigs, інші — ні
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
      // LOOKUP/CHILD
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
