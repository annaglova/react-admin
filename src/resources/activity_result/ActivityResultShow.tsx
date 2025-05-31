import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ActivityResultShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="business_process_only" />
    </SimpleShowLayout>
  </Show>
);
