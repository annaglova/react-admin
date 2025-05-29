const fs = require("fs");
const path = require("path");
const resources = require("./src/resourcesList.json");

// Для коректної типізації: всі ресурси
const MAIN_RESOURCES = resources.MAIN_RESOURCES;
const DICT_RESOURCES = resources.DICT_RESOURCES;
const ALL_RESOURCES = [...MAIN_RESOURCES, ...DICT_RESOURCES];

function capitalize(name) {
  return name
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function getComponentName(resource) {
  // breed -> BreedList, account_category -> AccountCategoryList
  return `${capitalize(resource)}List`;
}

function getImportLine(resource) {
  return `import { ${getComponentName(
    resource
  )} } from "./resources/${resource}/${capitalize(resource)}List";`;
}

// Генеруємо імпорти
const importLines = ALL_RESOURCES.map(getImportLine).join("\n");

// Генеруємо ресурси в <Admin>
const resourceLines = ALL_RESOURCES.map(
  (resource) => `
      <Resource
        name="${resource}"
        list={${getComponentName(resource)}}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    `
).join("\n");

const fileContent = `
// ⚠️ ЗГЕНЕРОВАНО. НЕ РЕДАГУВАТИ ВРУЧНУ!
// Оновити: node generate-app_v2.js

import { supabaseDataProvider } from "ra-supabase";
import {
  Admin,
  EditGuesser,
  ShowGuesser,
  Resource,
} from "react-admin";
import { CustomLayout } from "./CustomLayout";
${importLines}

const instanceUrl = import.meta.env.VITE_SUPABASE_URL as string;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const dataProvider = supabaseDataProvider({ instanceUrl, apiKey });

export default function App() {
  return (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
      ${resourceLines}
    </Admin>
  );
}
`;

fs.writeFileSync(path.join("src", "App.tsx"), fileContent, "utf-8");

console.log("✅ App.generated.tsx створено");
