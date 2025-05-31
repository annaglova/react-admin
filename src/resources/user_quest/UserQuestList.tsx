import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const UserQuestFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const UserQuestList = () => (
  <List filters={UserQuestFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="finish_date" />
      <TextField source="contact_id" />
      <DateField source="deadline_date" />
      <BooleanField source="deactivated" />
      <NumberField source="reward" />
      <TextField source="description" />
      <NumberField source="frequency_interval" />
    </Datagrid>
  </List>
);
