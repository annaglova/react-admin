import { BooleanField, Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const SysLanguageFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const SysLanguageList = () => (
  <List filters={SysLanguageFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="code" label="Code *" />
      <BooleanField source="is_used" label="Is Used" />
      <TextField source="sys_culture_def_id" label="Sys Culture Def Id" />
    </Datagrid>
  </List>
);
