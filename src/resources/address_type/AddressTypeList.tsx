import { BooleanField, Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const AddressTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AddressTypeList = () => (
  <List filters={AddressTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <BooleanField source="for_contact" label="For Contact" />
      <BooleanField source="for_account" label="For Account" />
      <TextField source="color" label="Color" />
    </Datagrid>
  </List>
);
