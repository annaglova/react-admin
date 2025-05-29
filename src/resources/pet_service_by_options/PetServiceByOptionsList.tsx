import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const PetServiceByOptionsFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetServiceByOptionsList = () => (
  <List filters={PetServiceByOptionsFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="status_id" />
      <TextField source="sex_id" />
      <TextField source="service_type_id" />
    </Datagrid>
  </List>
);
