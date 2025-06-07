import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ReferrerTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ReferrerTypeList = () => (
  <List filters={ReferrerTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <TextField source="matomo_code" label="Matomo Code" />
    </Datagrid>
  </List>
);
