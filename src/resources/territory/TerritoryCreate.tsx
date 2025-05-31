import { Create, SimpleForm, TextInput } from "react-admin";

export const TerritoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
