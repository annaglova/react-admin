import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PetTagShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
