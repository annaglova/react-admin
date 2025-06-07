import { BooleanField, Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ConfigItemStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ConfigItemStatusList = () => (
  <List filters={ConfigItemStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <BooleanField source="is_final" label="Is Final" />
      <BooleanField source="active" label="Active" />
    </Datagrid>
  </List>
);
