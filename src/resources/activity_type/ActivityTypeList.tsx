import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ActivityTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityTypeList = () => (
  <List filters={ActivityTypeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <TextField source="type_image" />
    </Datagrid>
  </List>
);
