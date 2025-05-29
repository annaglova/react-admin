import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const SexFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const SexList = () => (
  <List filters={SexFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="pet_type_id" />
      <TextField source="code" />
      <NumberField source="order" />
    </Datagrid>
  </List>
);
