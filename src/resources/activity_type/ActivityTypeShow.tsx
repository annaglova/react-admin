import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ActivityTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <TextField source="type_image" />
    </SimpleShowLayout>
  </Show>
);
