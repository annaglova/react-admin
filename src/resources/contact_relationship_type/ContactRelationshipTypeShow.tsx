import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ContactRelationshipTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
