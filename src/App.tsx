import { supabaseDataProvider } from "ra-supabase";
import { Admin, ListGuesser, Resource } from "react-admin";

const instanceUrl = "http://dev.dogarray.com:8020";
const apiKey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc0MjQ4OTA0MCwiZXhwIjo0ODk4MTYyNjQwLCJyb2xlIjoiYW5vbiJ9.MK56Wt3263m7GKk40Jq5BY--opS6LRDBWkX2J-Qv-_4";

const dataProvider = supabaseDataProvider({ instanceUrl, apiKey });

export default function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="breed" list={ListGuesser} />
    </Admin>
  );
}
