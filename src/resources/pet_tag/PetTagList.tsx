import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const PetTagFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const PetTagList = () => (
  <List filters={PetTagFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
