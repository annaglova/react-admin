import { Create, SimpleForm, TextInput } from "react-admin";

export const ContactTagCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="color" />
    </SimpleForm>
  </Create>
);
