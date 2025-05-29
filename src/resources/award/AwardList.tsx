import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const AwardFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const AwardList = () => (
  <List filters={AwardFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="pet_type_id" />
      <TextField source="provider_id" />
    </Datagrid>
  </List>
);
