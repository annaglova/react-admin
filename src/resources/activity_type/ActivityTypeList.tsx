import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ActivityTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityTypeList = () => (
  <List filters={ActivityTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <TextField source="code" label="Code" />
      <TextField source="type_image" label="Type Image" />
    </Datagrid>
  </List>
);
