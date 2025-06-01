import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ActivityPriorityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityPriorityList = () => (
  <List filters={ActivityPriorityFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="img" />
    </Datagrid>
  </List>
);
