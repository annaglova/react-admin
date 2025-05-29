import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ContactTagFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ContactTagList = () => (
  <List filters={ContactTagFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
