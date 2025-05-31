import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ConfigItemStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_final" />
      <BooleanField source="active" />
    </SimpleShowLayout>
  </Show>
);
