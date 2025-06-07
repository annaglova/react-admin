import { BooleanField, Datagrid, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const CoverTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CoverTypeList = () => (
  <List filters={CoverTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <NumberField source="priority" label="Priority" />
      <BooleanField source="system" label="System" />
    </Datagrid>
  </List>
);
