import { Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const AccountTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountTypeList = () => (
  <List filters={AccountTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
      <TextField source="raw_data_model" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
