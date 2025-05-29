import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const QuestFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const QuestList = () => (
  <List filters={QuestFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="url" />
      <TextField source="type_id" />
      <NumberField source="reward" />
      <NumberField source="frequency_interval" />
      <TextField source="frequency_id" />
      <BooleanField source="deactivated" />
      <TextField source="description" />
      <NumberField source="total_steps" />
      <DateField source="deadline_date" />
    </Datagrid>
  </List>
);
