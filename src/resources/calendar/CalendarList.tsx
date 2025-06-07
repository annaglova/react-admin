import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CalendarFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CalendarList = () => (
  <List filters={CalendarFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <ReferenceField source="parent_id" reference="calendar" label="Parent Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="time_zone_id" reference="time_zone" label="Time Zone Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="depth" label="Depth" />
      <BooleanField source="around_clock" label="Around Clock" />
      <BooleanField source="without_day_off" label="Without Day Off" />
    </Datagrid>
  </List>
);
