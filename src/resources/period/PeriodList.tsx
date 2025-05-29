import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const PeriodFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PeriodList = () => (
  <List filters={PeriodFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="start_date" />
      <DateField source="due_date" />
      <TextField source="year_id" />
      <TextField source="quarter_id" />
      <TextField source="parent_id" />
    </Datagrid>
  </List>
);
