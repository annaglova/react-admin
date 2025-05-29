import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const VerifiedStageFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const VerifiedStageList = () => (
  <List filters={VerifiedStageFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
    </Datagrid>
  </List>
);
