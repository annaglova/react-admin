import { BooleanField, Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const ServicePactStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ServicePactStatusList = () => (
  <List filters={ServicePactStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <BooleanField source="is_active" label="Is Active" />
      <TextField source="color" label="Color" />
    </Datagrid>
  </List>
);
