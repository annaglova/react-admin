import { Edit, SimpleForm, TextInput } from "react-admin";

export const AccountTagEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
