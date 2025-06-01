import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const UnitFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const UnitList = () => (
  <List filters={UnitFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="short_name" />
    </Datagrid>
  </List>
);
