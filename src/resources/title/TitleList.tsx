import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const TitleFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const TitleList = () => (
  <List filters={TitleFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="pet_type_id" />
      <TextField source="provider_id" />
      <BooleanField source="is_processed" />
      <NumberField source="rating" />
    </Datagrid>
  </List>
);
