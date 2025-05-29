import { BooleanField, Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const CalendarFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CalendarList = () => (
  <List filters={CalendarFilters}>
    <Datagrid rowClick="show">
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
    </Datagrid>
  </List>
);
