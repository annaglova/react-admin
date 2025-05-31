import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ServicePactStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServicePactStatusList = () => (
  <List filters={ServicePactStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_active" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
