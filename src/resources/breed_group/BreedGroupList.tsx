import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const BreedGroupFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const BreedGroupList = () => (
  <List filters={BreedGroupFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="code" />
      <TextField source="provider_id" />
    </Datagrid>
  </List>
);
