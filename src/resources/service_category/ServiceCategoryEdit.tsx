import { Edit, SimpleForm, TextInput } from "react-admin";

export const ServiceCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
