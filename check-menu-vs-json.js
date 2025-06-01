const fs = require("fs");

// 1. Завантажуємо ресурси з resourcesList.json
const resourcesJson = require("./src/resourcesList.json");
const ALL_RESOURCES = [
  ...resourcesJson.MAIN_RESOURCES,
  ...resourcesJson.LOOKUP_RESOURCES,
];

// 2. Парсимо Menu з CustomMenu (беремо всі to="/..." з Menu.Item)
const customMenu = fs.readFileSync("./src/CustomMenu.tsx", "utf-8");

// Регулярка для to="/resource_name"
const menuResourceRegex = /to="\/([a-zA-Z0-9_]+)"/g;
let match;
const menuResources = new Set();
while ((match = menuResourceRegex.exec(customMenu))) {
  menuResources.add(match[1]);
}

// 3. Порівняння
const allResourcesSet = new Set(ALL_RESOURCES);

// Які є в json, але нема в меню (треба додати в меню)
const toAdd = ALL_RESOURCES.filter((res) => !menuResources.has(res));

// Які є в меню, але нема в json (треба видалити з меню)
const toRemove = Array.from(menuResources).filter(
  (res) => !allResourcesSet.has(res)
);

// 4. Вивід
console.log("\n=== Порівняння ресурсів ===");
if (toAdd.length) {
  console.log("➕ Треба додати в меню:");
  toAdd.forEach((res) => console.log(`  - ${res}`));
} else {
  console.log("✅ Всі ресурси з json вже в меню");
}

if (toRemove.length) {
  console.log("➖ Треба видалити з меню:");
  toRemove.forEach((res) => console.log(`  - ${res}`));
} else {
  console.log("✅ Всі ресурси з меню є у json");
}

console.log("\nПеревірка завершена.\n");
