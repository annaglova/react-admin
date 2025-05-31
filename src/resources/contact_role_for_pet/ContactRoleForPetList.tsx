import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ContactRoleForPetFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ContactRoleForPetList = () => (
  <List filters={ContactRoleForPetFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
