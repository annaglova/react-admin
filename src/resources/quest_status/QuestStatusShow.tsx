import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const QuestStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <NumberField source="order" />
    </SimpleShowLayout>
  </Show>
);
