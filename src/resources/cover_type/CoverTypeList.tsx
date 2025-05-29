import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const CoverTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const CoverTypeList = () => (
  <List filters={CoverTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
      <BooleanField source="system" />
    </Datagrid>
  </List>
);
