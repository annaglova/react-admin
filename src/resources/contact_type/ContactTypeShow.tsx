import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ContactTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
