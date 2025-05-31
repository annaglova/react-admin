// generate-app_v5.js
const fs = require("fs");
const path = require("path");
const resources = require("./src/resourcesList.json");

const MAIN_RESOURCES = resources.MAIN_RESOURCES;
const DICT_RESOURCES = resources.DICT_RESOURCES;
const ALL_RESOURCES = [...MAIN_RESOURCES, ...DICT_RESOURCES];

function capitalize(name) {
  return name
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function getListName(resource) {
  return `${capitalize(resource)}List`;
}
function getShowName(resource) {
  return `${capitalize(resource)}Show`;
}
function getCreateName(resource) {
  return `${capitalize(resource)}Create`;
}
function getEditName(resource) {
  return `${capitalize(resource)}Edit`;
}
function getImportLines(resource) {
  const c = capitalize(resource);
  return `import { ${c}List } from "./resources/${resource}/${c}List";
import { ${c}Show } from "./resources/${resource}/${c}Show";
import { ${c}Create } from "./resources/${resource}/${c}Create";
import { ${c}Edit } from "./resources/${resource}/${c}Edit";`;
}

const importLines = ALL_RESOURCES.map(getImportLines).join("\n");

const resourceLines = ALL_RESOURCES.map(
  (resource) => `
      <Resource
        name="${resource}"
        list={${getListName(resource)}}
        show={${getShowName(resource)}}
        create={${getCreateName(resource)}}
        edit={${getEditName(resource)}}
      />
    `
).join("\n");

const fileContent = `
// ⚠️ ЗГЕНЕРОВАНО. НЕ РЕДАГУВАТИ ВРУЧНУ!
// Оновити: node generate-app_v5.js

import { supabaseDataProvider } from "ra-supabase";
import {
  Admin,
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
