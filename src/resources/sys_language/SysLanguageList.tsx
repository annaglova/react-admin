import { BooleanField, Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const SysLanguageFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const SysLanguageList = () => (
  <List filters={SysLanguageFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <BooleanField source="is_used" />
      <TextField source="sys_culture_def_id" />
    </Datagrid>
  </List>
);
