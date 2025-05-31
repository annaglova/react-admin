import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const QuestTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
    </SimpleShowLayout>
  </Show>
);
