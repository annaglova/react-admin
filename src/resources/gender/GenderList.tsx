import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const GenderFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const GenderList = () => (
  <List filters={GenderFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="description" />
    </Datagrid>
  </List>
);
