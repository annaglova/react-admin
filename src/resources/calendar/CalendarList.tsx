import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const CalendarFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const CalendarList = () => (
  <List filters={CalendarFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="parent_id" />
      <TextField source="time_zone_id" />
      <NumberField source="depth" />
      <BooleanField source="around_clock" />
      <BooleanField source="without_day_off" />
    </Datagrid>
  </List>
);
