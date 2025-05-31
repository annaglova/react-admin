import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ActivityPriorityShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="img" />
    </SimpleShowLayout>
  </Show>
);
