import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const CollectionTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CollectionTypeList = () => (
  <List filters={CollectionTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
    </Datagrid>
  </List>
);
