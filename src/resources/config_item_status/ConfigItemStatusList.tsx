import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ConfigItemStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ConfigItemStatusList = () => (
  <List filters={ConfigItemStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_final" />
      <BooleanField source="active" />
    </Datagrid>
  </List>
);
