const fs = require("fs");
const path = require("path");

// Массив таблиць
const tables = [
  "pet",
  "litter",
  "contact",
  "account",
  "cover",
  "note",
  "collection",
  "event",
  "competition",
  "project",
  "activity",
  "raw_data",
  "pablic_data",
  "product",
  "order",
  "cashflow",
  "service_pact",
  "service_item",
  "conf_item",
  "post",
  "post_feed",
  "quest",
  "user_quest",
];

const baseCode = (name, Name) => `
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";

const ${Name}Filters = [];

export const ${Name}List = () => (
  <List filters={${Name}Filters}>
    <Datagrid>
      {/* Додай потрібні поля */}
    </Datagrid>
  </List>
);
`;

function toPascalCase(str) {
  return str
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

const outDir = path.join(__dirname, "src", "lists");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const table of tables) {
  const Name = toPascalCase(table);
  const fileName = `${Name}List.tsx`;
  fs.writeFileSync(path.join(outDir, fileName), baseCode(table, Name));
  console.log(`Створено: ${fileName}`);
}

console.log("✅ Всі List-файли згенеровано в src/lists/");
