import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const LicenseManagerManageTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const LicenseManagerManageTypeList = () => (
  <List filters={LicenseManagerManageTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
