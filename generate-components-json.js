const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

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

function getFieldMeta(table, col) {
  const tableValidators = validators[table] || {};
  const v = tableValidators[col.column_name] || {};
  return {
    name: col.column_name,
    type: col.data_type,
    isRequired: !!v.isRequired,
  };
}

function toPascalCase(str) {
  return str
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function loadIfExists(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch (e) {
    return {};
  }
}

(async () => {
  for (const table of ALL_RESOURCES) {
    // 1. Колонки таблиці
    const { data: columns, error: colErr } = await supabase.rpc(
      "get_table_columns",
      { tablename: table }
    );
    if (colErr || !columns?.length) continue;

    // 2. Foreign keys FROM (поле → ref table)
    const { data: foreignKeys, error: fkErr } = await supabase.rpc(
      "get_foreign_keys_from",
      { table_name: table }
    );
    const fkMap = {};
    if (Array.isArray(foreignKeys)) {
      for (const fk of foreignKeys) fkMap[fk.column_name] = fk.ref_table;
    }

    // 3. Основні поля
    const filteredCols = columns.filter(
      (c) => !EXCLUDE_FIELDS.includes(c.column_name)
    );
    const fields = filteredCols.map((col) => {
      const meta = getFieldMeta(table, col);
      if (fkMap[col.column_name]) {
        meta.isFk = true;
        meta.ref = fkMap[col.column_name];
      }
      return meta;
    });

    // 4. Діти (detailsTabs)
    let detailsTabs = [];
    if (MAIN_RESOURCES.includes(table)) {
      const { data: details } = await supabase.rpc("get_foreign_keys_to", {
        table_name: table,
      });
      // map: дочірній ресурс -> fk(s)
      const map = {};
      if (Array.isArray(details)) {
        for (const d of details) {
          if (!map[d.table_name]) map[d.table_name] = [];
          map[d.table_name].push(d.column_name);
        }
      }
      // Для кожної дочірньої таблиці — також поля з типами і FK
      for (const [child, fkColumns] of Object.entries(map)) {
        // Всі поля для дочірньої
        const { data: childCols } = await supabase.rpc("get_table_columns", {
          tablename: child,
        });
        const { data: childFKs } = await supabase.rpc("get_foreign_keys_from", {
          table_name: child,
        });
        const childFkMap = {};
        if (Array.isArray(childFKs)) {
          for (const fk of childFKs) childFkMap[fk.column_name] = fk.ref_table;
        }
        const childFields = (childCols || []).map((col) => {
          const meta = getFieldMeta(child, col);
          if (childFkMap[col.column_name]) {
            meta.isFk = true;
            meta.ref = childFkMap[col.column_name];
          }
          return meta;
        });
        detailsTabs.push({
          resource: child,
          fk: fkColumns.length === 1 ? fkColumns[0] : fkColumns, // handle multi-fk
          fields: childFields,
        });
      }
    }

    // 5. Завантажити існуючий [table].json (якщо є)
    const dir = path.join("src", "resources", table);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, `${table}.json`);
    const prev = loadIfExists(filePath);

    // 6. Перезаписати fields, detailsTabs, залишити custom
    const result = {
      ...prev,
      fields,
      detailsTabs,
      custom: prev.custom || {},
    };
    fs.writeFileSync(filePath, JSON.stringify(result, null, 2));
    console.log(`✅ ${table}.json створено/оновлено`);
  }

  console.log("🎉 Всі json згенеровано/оновлено.");
})();
