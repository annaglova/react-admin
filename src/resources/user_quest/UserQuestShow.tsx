import { BooleanField, DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const UserQuestShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <DateField source="finish_date" />
      <TextField source="contact_id" />
      <DateField source="deadline_date" />
      <BooleanField source="deactivated" />
      <NumberField source="reward" />
      <TextField source="description" />
      <NumberField source="frequency_interval" />
    </SimpleShowLayout>
  </Show>
);
