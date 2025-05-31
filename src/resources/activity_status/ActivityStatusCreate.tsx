import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const ActivityStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <BooleanInput source="finish" />
      <TextInput source="color" />
    </SimpleForm>
  </Create>
);
