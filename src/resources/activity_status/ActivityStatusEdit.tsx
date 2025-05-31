import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ActivityStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <BooleanInput source="finish" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
