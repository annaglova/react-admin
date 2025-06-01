import { BooleanField, Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const AddressTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AddressTypeList = () => (
  <List filters={AddressTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="for_contact" />
      <BooleanField source="for_account" />
      <TextField source="color" />
    </Datagrid>
  </List>
);
