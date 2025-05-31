import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const PetIdentifierTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_public" />
    </SimpleForm>
  </Create>
);
