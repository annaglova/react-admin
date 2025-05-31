import { Create, SimpleForm, TextInput } from "react-admin";

export const ContactTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="color" />
    </SimpleForm>
  </Create>
);
