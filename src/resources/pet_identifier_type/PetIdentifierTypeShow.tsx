import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PetIdentifierTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_public" />
    </SimpleShowLayout>
  </Show>
);
