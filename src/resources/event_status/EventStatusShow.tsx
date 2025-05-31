import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const EventStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
