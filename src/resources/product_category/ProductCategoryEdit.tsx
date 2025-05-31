import { Edit, SimpleForm, TextInput } from "react-admin";

export const ProductCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
