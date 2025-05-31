import { Edit, SimpleForm, TextInput } from "react-admin";

export const PetServiceStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
