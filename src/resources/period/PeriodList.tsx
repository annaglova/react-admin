import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PeriodShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="start_date" />
      <DateField source="due_date" />
      <ReferenceField source="year_id" reference="period">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="quarter_id" reference="period">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="parent_id" reference="period">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
