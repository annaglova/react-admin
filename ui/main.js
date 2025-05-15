import { render } from "https://esm.sh/react-dom@18.2.0/client";
import { Admin, Resource, ListGuesser } from "https://esm.sh/react-admin@4.14.2";
import simpleRestProvider from "https://esm.sh/ra-data-simple-rest@4.14.2";

const dataProvider = simpleRestProvider("https://jsonplaceholder.typicode.com");

render(
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} />
  </Admin>,
  document.getElementById("root")
);
