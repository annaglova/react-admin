import { BooleanField, Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const ActivityResultFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityResultList = () => (
  <List filters={ActivityResultFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <BooleanField source="business_process_only" label="Business Process Only" />
    </Datagrid>
  </List>
);
