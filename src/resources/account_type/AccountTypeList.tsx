import { Datagrid, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const AccountTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountTypeList = () => (
  <List filters={AccountTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <NumberField source="priority" label="Priority" />
      <TextField source="raw_data_model" label="Raw Data Model" />
      <TextField source="color" label="Color" />
    </Datagrid>
  </List>
);
