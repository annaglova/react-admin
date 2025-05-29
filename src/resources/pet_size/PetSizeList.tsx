import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const PetSizeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const PetSizeList = () => (
  <List filters={PetSizeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="pet_type_id" />
    </Datagrid>
  </List>
);
