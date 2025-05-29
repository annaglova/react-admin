import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const PetClassFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetClassList = () => (
  <List filters={PetClassFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="age_to" />
      <NumberField source="age_from" />
      <NumberField source="code" />
      <TextField source="pet_type_id" />
      <TextField source="provider_id" />
    </Datagrid>
  </List>
);
