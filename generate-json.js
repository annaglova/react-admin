const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const SYSTEM_FIELDS = [
  "id",
  "created_on",
  "created_by_id",
  "modified_on",
  "modified_by_id",
  "updated_at",
  "created_at",
];

const emptyCustom = {
  listFields: [],
  showFields: [],
  createFields: [],
  editFields: [],
  showDetailsTabs: [],
};

const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES || [];
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES || [];
const CHILD_RESOURCES = resources.CHILD_RESOURCES || [];
const ALL_RESOURCES = [
  ...MAIN_RESOURCES,
  ...LOOKUP_RESOURCES,
  ...CHILD_RESOURCES,
];

// Вся логіка валідаторів видалена!

function getFieldMeta(table, col) {
  return {
    name: col.column_name,
    type: col.data_type,
    // isSystemField: SYSTEM_FIELDS.includes(col.column_name),
    // жодних isRequired або інфи про валідацію тут немає
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

function fillCustom(custom = {}) {
  return {
    listFields: Array.isArray(custom.listFields) ? custom.listFields : [],
    showFields: Array.isArray(custom.showFields) ? custom.showFields : [],
    createFields: Array.isArray(custom.createFields) ? custom.createFields : [],
    editFields: Array.isArray(custom.editFields) ? custom.editFields : [],
    showDetailsTabs: Array.isArray(custom.showDetailsTabs)
      ? custom.showDetailsTabs
      : [],
  };
}

// Запит повертає всі партиції у public (без індексів)
async function getPartitionNames() {
  const { data: partitions, error } = await supabase.rpc("execute_sql_select", {
    sql: `
        SELECT c.relname AS partition
        FROM pg_inherits
        JOIN pg_class c ON pg_inherits.inhrelid = c.oid
        JOIN pg_namespace n ON c.relnamespace = n.oid
        WHERE n.nspname = 'public'
          AND c.relkind = 'r'
      `,
  });
  if (error) throw error;
  // Можемо зробити lower-case set для зручності
  return new Set(
    (partitions || [])
      .map((row) => row.result?.partition?.toLowerCase())
      .filter(Boolean)
  );
}

function loadIfExists(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch (e) {
    return {};
  }
}

(async () => {
  const partitionNames = await getPartitionNames();
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
    const fields = columns.map((col) => {
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
        // Пропускаємо, якщо це партиція (імʼя в нижньому регістрі)
        if (partitionNames.has(child.toLowerCase())) continue;

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

    // 6. Перезаписати fields, detailsTabs, залишити custom + metaUpdatedAt
    const result = {
      ...prev,
      fields,
      detailsTabs,
      custom: fillCustom(prev.custom),
      metaUpdatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(filePath, JSON.stringify(result, null, 2));
    console.log(`✅ ${table}.json створено/оновлено`);
  }

  // 7. Перевірка валідності всіх json після генерації
  let errors = [];
  for (const table of ALL_RESOURCES) {
    const filePath = path.join("src", "resources", table, `${table}.json`);
    try {
      const obj = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      if (!Array.isArray(obj.fields)) {
        errors.push(`${table}: fields is not array`);
      }
      if (!Array.isArray(obj.detailsTabs)) {
        errors.push(`${table}: detailsTabs is not array`);
      }
    } catch (e) {
      errors.push(`${table}: JSON parse error: ${e.message}`);
    }
  }
  if (errors.length) {
    console.error("❌ Виявлено помилки у json:\n" + errors.join("\n"));
    process.exit(1);
  } else {
    console.log("✅ Всі json-файли валідні!");
  }

  console.log("🎉 Всі json згенеровано/оновлено.");
})();
