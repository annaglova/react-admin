import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const AccountCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountCategoryList = () => (
  <List filters={AccountCategoryFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="color" label="Color" />
    </Datagrid>
  </List>
);
