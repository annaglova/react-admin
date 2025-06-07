import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const PetServiceTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetServiceTypeList = () => (
  <List filters={PetServiceTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
    </Datagrid>
  </List>
);
