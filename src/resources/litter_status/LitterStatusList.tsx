import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const LitterStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="order" />
    </SimpleShowLayout>
  </Show>
);
