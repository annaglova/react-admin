const fs = require("fs");
const path = require("path");
const resources = require("./src/resourcesList.json");

// Для коректної типізації: всі ресурси
const MAIN_RESOURCES = resources.MAIN_RESOURCES;
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES;
const ALL_RESOURCES = [...MAIN_RESOURCES, ...LOOKUP_RESOURCES];

function capitalize(name) {
  return name
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function getListComponentName(resource) {
  // breed -> BreedList, account_category -> AccountCategoryList
  return `${capitalize(resource)}List`;
}
function getShowComponentName(resource) {
  return `${capitalize(resource)}Show`;
}

function getListImportLine(resource) {
  return `import { ${getListComponentName(
    resource
  )} } from "./resources/${resource}/${capitalize(resource)}List";`;
}
function getShowImportLine(resource) {
  return `import { ${getShowComponentName(
    resource
  )} } from "./resources/${resource}/${capitalize(resource)}Show";`;
}

// Генеруємо імпорти
const importListLines = ALL_RESOURCES.map(getListImportLine).join("\n");
const importShowLines = ALL_RESOURCES.map(getShowImportLine).join("\n");

// Генеруємо ресурси в <Admin>
const resourceLines = ALL_RESOURCES.map(
  (resource) => `
      <Resource
        name="${resource}"
        list={${getListComponentName(resource)}}
        show={${getShowComponentName(resource)}}
        edit={EditGuesser}
      />
    `
).join("\n");

const fileContent = `
// ⚠️ ЗГЕНЕРОВАНО. НЕ РЕДАГУВАТИ ВРУЧНУ!
// Оновити: node generate-app_v3.js

import { supabaseDataProvider } from "ra-supabase";
import {
  Admin,
  EditGuesser,
  Resource,
} from "react-admin";
import { CustomLayout } from "./layouts/CustomLayout";
${importListLines}
${importShowLines}

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

console.log("✅ App.tsx (з List і Show) створено");
