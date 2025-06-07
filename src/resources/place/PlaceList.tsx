import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const PlaceFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PlaceList = () => (
  <List filters={PlaceFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
    </Datagrid>
  </List>
);
