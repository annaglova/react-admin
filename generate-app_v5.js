// ⚠️ ЗГЕНЕРОВАНО. НЕ РЕДАГУВАТИ ВРУЧНУ!
// Оновити: node generate-app_v5.js

const fs = require("fs");
const path = require("path");
const resources = require("./src/resourcesList.json");

const MAIN_RESOURCES = resources.MAIN_RESOURCES;
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES;
const CHILD_RESOURCES = resources.CHILD_RESOURCES || [];
const ALL_RESOURCES = [...MAIN_RESOURCES, ...LOOKUP_RESOURCES];

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

// Генеруємо масив імен для експорту з "@/resources"
function getCrudNames(resource, hasList = true) {
  const c = capitalize(resource);
  // MAIN/LOOKUP мають list, CHILD тільки show/edit/create
  return hasList
    ? [`${c}List`, `${c}Show`, `${c}Create`, `${c}Edit`]
    : [`${c}Show`, `${c}Create`, `${c}Edit`];
}

// ---- Масив усіх імен CRUD-компонентів ----
const allCrudNames = [
  ...ALL_RESOURCES.flatMap((r) => getCrudNames(r, true)),
  ...CHILD_RESOURCES.flatMap((r) => getCrudNames(r, false)),
];
// Унікальні (на випадок дублів)
const uniqCrudNames = [...new Set(allCrudNames)];

const importLine = `import { ${uniqCrudNames.join(", ")} } from "@/resources";`;

// ---- Генерація <Resource ... /> ----
const resourceLines = [
  ...ALL_RESOURCES.map(
    (resource) => `
      <Resource
        name="${resource}"
        list={${getListName(resource)}}
        show={${getShowName(resource)}}
        create={${getCreateName(resource)}}
        edit={${getEditName(resource)}}
      />`
  ),
  ...CHILD_RESOURCES.map((resource) => {
    const c = capitalize(resource);
    return `
      <Resource
        name="${resource}"
        show={${c}Show}
        create={${c}Create}
        edit={${c}Edit}
      />`;
  }),
].join("\n");

const fileContent = `
// ⚠️ ЗГЕНЕРОВАНО. НЕ РЕДАГУВАТИ ВРУЧНУ!
// Оновити: node generate-app_v5.js

import { supabaseDataProvider } from "ra-supabase";
import {
  Admin,
  Resource,
} from "react-admin";
import { CustomLayout } from "./layouts/CustomLayout";
${importLine}

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
console.log("✅ App.tsx створено");
