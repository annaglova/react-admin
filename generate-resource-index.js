const fs = require("fs");
const path = require("path");

const resources = require("./src/resourcesList.json");
const MAIN_RESOURCES = resources.MAIN_RESOURCES || [];
const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES || [];
const CHILD_RESOURCES = resources.CHILD_RESOURCES || [];
const ALL_RESOURCES = [
  ...MAIN_RESOURCES,
  ...LOOKUP_RESOURCES,
  ...CHILD_RESOURCES,
];

function toPascalCase(str) {
  return str
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

const lines = [];

for (const resource of ALL_RESOURCES) {
  const Name = toPascalCase(resource);
  const dir = `./${resource}`;

  // Перевіряємо чи існує компонент, і додаємо експорти тільки якщо існує
  ["List", "Show", "Create", "Edit"].forEach((type) => {
    const file = path.join("src", "resources", resource, `${Name}${type}.tsx`);
    if (fs.existsSync(file)) {
      lines.push(`export * from "${dir}/${Name}${type}";`);
    }
  });
}

const outPath = path.join("src", "resources", "index.ts");
fs.writeFileSync(outPath, lines.join("\n") + "\n");
console.log(`✅ Згенеровано src/resources/index.ts`);
