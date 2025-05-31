import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ActivityStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityStatusList = () => (
  <List filters={ActivityStatusFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <BooleanField source="finish" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
