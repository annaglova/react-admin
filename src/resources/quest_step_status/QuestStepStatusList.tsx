import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const QuestStepStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
    </SimpleShowLayout>
  </Show>
);
