import { Create, SimpleForm, TextInput } from "react-admin";

export const UnitCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="short_name" />
    </SimpleForm>
  </Create>
);
