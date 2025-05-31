import { BooleanField, DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const QuestShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="url" />
      <ReferenceField source="type_id" reference="quest_type">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="reward" />
      <NumberField source="frequency_interval" />
      <ReferenceField source="frequency_id" reference="quest_frequency">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="deactivated" />
      <TextField source="description" />
      <NumberField source="total_steps" />
      <DateField source="deadline_date" />
    </SimpleShowLayout>
  </Show>
);
