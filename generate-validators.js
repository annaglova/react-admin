require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

// Функція для переведення PascalCase/UpperCamelCase у snake_case
function toSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, "_$1") // Перед кожною великою літерою — підкреслення
    .replace(/^_/, "") // Забрати підкреслення на початку
    .toLowerCase(); // Все у нижній регістр
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function generateValidatorsJSON() {
  console.log("Запит до Supabase...");
  const { data, error } = await supabase
    .from("config")
    .select("id, data")
    .like("id", "%_SchemaName");

  if (error) throw error;
  console.log("Результат:", data?.length, "записів знайдено");

  const validators = {};

  for (const row of data) {
    // Тип схеми (наприклад, Breed або Contact) → breed, contact
    const schemaNameOrig = row.data?.type;
    const schemaName = schemaNameOrig ? toSnakeCase(schemaNameOrig) : null;
    const fieldsConfig = row.data?.fieldsConfig;
    if (!schemaName || !fieldsConfig) continue;

    if (!validators[schemaName]) validators[schemaName] = {};
    for (const [fieldOrig, config] of Object.entries(fieldsConfig)) {
      const field = toSnakeCase(fieldOrig); // Поля теж у snake_case
      validators[schemaName][field] = {
        isRequired: !!config.isRequired,
        // Можна розкоментувати для інших валідаторів
        // minLength: config.minLength,
        // maxLength: config.maxLength,
        // pattern: config.pattern,
      };
    }
  }

  const jsonPath = path.join("src", "validators.json");
  fs.writeFileSync(jsonPath, JSON.stringify(validators, null, 2), "utf-8");
  console.log("✅ Валідатори згенеровані в src/validators.json");
}

generateValidatorsJSON();
