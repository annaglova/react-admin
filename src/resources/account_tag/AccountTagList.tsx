import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const AccountTagFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountTagList = () => (
  <List filters={AccountTagFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
