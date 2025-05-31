import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const QuestFrequencyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
    </SimpleShowLayout>
  </Show>
);
