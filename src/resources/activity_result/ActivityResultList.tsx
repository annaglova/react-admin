import { BooleanField, Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ActivityResultFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityResultList = () => (
  <List filters={ActivityResultFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="business_process_only" />
    </Datagrid>
  </List>
);
