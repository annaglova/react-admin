import { Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const PetTagFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetTagList = () => (
  <List filters={PetTagFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="color" label="Color" />
    </Datagrid>
  </List>
);
