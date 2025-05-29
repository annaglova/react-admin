import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ConfigItemTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ConfigItemTypeList = () => (
  <List filters={ConfigItemTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="conf_item_category_id" />
    </Datagrid>
  </List>
);
