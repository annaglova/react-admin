import { BooleanField, DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CoverTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
      <BooleanField source="system" />
    </SimpleShowLayout>
  </Show>
);
