import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ProductTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ProductTypeList = () => (
  <List filters={ProductTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_service" />
      <TextField source="category_id" />
    </Datagrid>
  </List>
);
