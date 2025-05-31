import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ServicePactStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_active" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
