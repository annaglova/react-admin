import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const UnitFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const UnitList = () => (
  <List filters={UnitFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="short_name" />
    </Datagrid>
  </List>
);
