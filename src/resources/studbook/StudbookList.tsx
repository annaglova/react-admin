import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const StudbookFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const StudbookList = () => (
  <List filters={StudbookFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="account_id" />
      <TextField source="status_id" />
      <TextField source="type_id" />
      <TextField source="alternate_names" />
    </Datagrid>
  </List>
);
