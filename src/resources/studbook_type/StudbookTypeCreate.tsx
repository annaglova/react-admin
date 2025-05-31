import { Create, SimpleForm, TextInput } from "react-admin";

export const StudbookTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
