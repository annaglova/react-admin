import { BooleanField, Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ProjectStatusFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProjectStatusList = () => (
  <List filters={ProjectStatusFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_final" />
    </Datagrid>
  </List>
);
