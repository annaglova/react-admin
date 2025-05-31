import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ActivityStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <BooleanField source="finish" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
