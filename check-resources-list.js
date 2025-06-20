require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Ручне виключення (case-insensitive)
const EXCLUDE_TABLES = [
  "config",
  "config_type",
  "form_field_code",
  // додай інші якщо потрібно
];

// Файл із твоїм ручним списком ресурсів
const MANUAL_LIST_PATH = path.join("src", "resourcesList.json");
const manualResources = JSON.parse(fs.readFileSync(MANUAL_LIST_PATH, "utf-8"));
const manualMain = new Set(
  (manualResources.MAIN_RESOURCES || []).map((x) => x.toLowerCase())
);
const manualLookup = new Set(
  (manualResources.LOOKUP_RESOURCES || []).map((x) => x.toLowerCase())
);
const manualChild = new Set(
  (manualResources.CHILD_RESOURCES || []).map((x) => x.toLowerCase())
);

function toLowerSet(arr) {
  return new Set(arr.filter(Boolean).map((x) => x.toLowerCase()));
}

// Автоматична класифікація для lookup
function isLookupTable(name) {
  return (
    name.endsWith("_type") ||
    name.endsWith("_category") ||
    name.endsWith("_status") ||
    name.endsWith("_tag") ||
    name.endsWith("_class") ||
    name.endsWith("_group") ||
    name.endsWith("_role") ||
    name.endsWith("_stage") ||
    name.startsWith("sys_") ||
    name.endsWith("_lookup")
  );
}

function isChildTable(name) {
  return (
    name.endsWith("_in_breed") ||
    name.endsWith("_in_account") ||
    name.endsWith("_in_tag") ||
    name.endsWith("_in_project")
    // додай власні патерни
  );
}

async function main() {
  try {
    // 1. Всі таблиці з public
    const { data: allTables, error: tabErr } = await supabase.rpc(
      "execute_sql_select",
      {
        sql: `
          SELECT table_name
          FROM information_schema.tables
          WHERE table_schema = 'public'
            AND table_type = 'BASE TABLE'
        `,
      }
    );
    if (tabErr) throw tabErr;

    // 2. Всі partition child
    const { data: partitions, error: partErr } = await supabase.rpc(
      "execute_sql_select",
      {
        sql: `
      SELECT c.relname AS partition
      FROM pg_inherits
      JOIN pg_class c ON pg_inherits.inhrelid = c.oid
      JOIN pg_namespace n ON c.relnamespace = n.oid
      WHERE n.nspname = 'public'
        AND c.relkind = 'r' -- тільки таблиці, без індексів
    `,
      }
    );
    if (partErr) throw partErr;

    const partitionNames = toLowerSet(
      (partitions || []).map((row) => row.result?.partition).filter(Boolean)
    );
    const exclude = toLowerSet(EXCLUDE_TABLES);

    // 3. Всі таблиці, які реально є в БД
    const allTableNames = (allTables || [])
      .map((row) => row.result?.table_name)
      .filter(
        (t) =>
          typeof t === "string" &&
          !partitionNames.has(t.toLowerCase()) &&
          !exclude.has(t.toLowerCase()) &&
          !t.startsWith("pg_") &&
          !t.startsWith("sql_")
      );

    // 4. Визначаємо UNSORTED
    const allManual = new Set([...manualMain, ...manualLookup, ...manualChild]);
    const unsortedTables = allTableNames.filter(
      (t) => !allManual.has(t.toLowerCase())
    );

    // 5. Визначаємо DELETED — що є в ручному лісті, але нема в БД
    const allDbSet = toLowerSet(allTableNames);

    function findDeleted(manualSet) {
      return Array.from(manualSet).filter((name) => !allDbSet.has(name));
    }

    const deletedMain = findDeleted(manualMain);
    const deletedLookup = findDeleted(manualLookup);
    const deletedChild = findDeleted(manualChild);

    // Можна групувати ось так (зручно для видалення з різних груп)
    const DELETED = {
      MAIN: deletedMain.sort(),
      LOOKUP: deletedLookup.sort(),
      CHILD: deletedChild.sort(),
    };

    // 6. Виводимо результати
    if (unsortedTables.length) {
      console.log(
        "❗️Знайдено таблиці, яких немає у ручному списку (UNSORTED):",
        unsortedTables
      );
    } else {
      console.log("✔️ Всі таблиці враховані у ручному списку.");
    }

    if (DELETED.MAIN.length || DELETED.LOOKUP.length || DELETED.CHILD.length) {
      console.log(
        "❗️DELETED (відсутні в БД, але є в ручному списку):",
        DELETED
      );
    } else {
      console.log("✔️ Всі ресурси ручного списку реально є в БД.");
    }

    // 7. Записуємо у файл
    const outputList = {
      ...manualResources,
      UNSORTED: unsortedTables.sort(),
      DELETED,
    };

    fs.writeFileSync(
      path.join("src", "resourcesList.checked.json"),
      JSON.stringify(outputList, null, 2),
      "utf-8"
    );
    console.log("✅ resourcesList.checked.json оновлено");
  } catch (err) {
    console.error("❌ Unhandled error:", err?.message || err);
    if (err?.stack) console.error(err.stack);
    process.exit(1);
  }
}

main();
