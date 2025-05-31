import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const PetIdentifierTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_public" />
    </SimpleForm>
  </Edit>
);
