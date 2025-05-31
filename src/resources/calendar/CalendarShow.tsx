import { BooleanField, DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CalendarShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="parent_id" reference="calendar">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="time_zone_id" reference="time_zone">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="depth" />
      <BooleanField source="around_clock" />
      <BooleanField source="without_day_off" />
    </SimpleShowLayout>
  </Show>
);
