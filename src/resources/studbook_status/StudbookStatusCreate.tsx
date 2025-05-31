import { Create, SimpleForm, TextInput } from "react-admin";

export const StudbookStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
