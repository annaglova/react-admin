import { Edit, SimpleForm, TextInput } from "react-admin";

export const AccountCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
