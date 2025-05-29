import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ContactTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ContactTypeList = () => (
  <List filters={ContactTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
