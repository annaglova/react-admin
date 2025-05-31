import { Create, SimpleForm, TextInput } from "react-admin";

export const AccountTagCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="color" />
    </SimpleForm>
  </Create>
);
