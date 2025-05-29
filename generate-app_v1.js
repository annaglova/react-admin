const resources = require("./src/resourcesList.json");

const code = `
import { supabaseDataProvider } from "ra-supabase";
import { Admin, ListGuesser, EditGuesser, ShowGuesser, Resource } from "react-admin";
import { CustomLayout } from "./CustomLayout";
import { ALL_RESOURCES } from "./resourcesList";

const instanceUrl = import.meta.env.VITE_SUPABASE_URL as string;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const dataProvider = supabaseDataProvider({ instanceUrl, apiKey });

export default function App() {
  return (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
      {ALL_RESOURCES.map((resource) => (
        <Resource
          key={resource}
          name={resource}
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      ))}
    </Admin>
  );
}
`;

require("fs").writeFileSync("src/App.tsx", code);
console.log("✅ src/App.tsx згенеровано!");
