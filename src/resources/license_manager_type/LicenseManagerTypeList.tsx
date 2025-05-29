import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const LicenseManagerTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LicenseManagerTypeList = () => (
  <List filters={LicenseManagerTypeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
