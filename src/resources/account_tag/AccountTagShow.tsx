import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AccountTagShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
