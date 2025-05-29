import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const CoatTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const CoatTypeList = () => (
  <List filters={CoatTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="pet_type_id" />
    </Datagrid>
  </List>
);
