import { Edit, SimpleForm, TextInput } from "react-admin";

export const PetServiceTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
