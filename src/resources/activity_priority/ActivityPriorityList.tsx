import { Datagrid, DateField, List, Pagination, TextField, TextInput } from "react-admin";

const ActivityPriorityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityPriorityList = () => (
  <List filters={ActivityPriorityFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="img" />
    </Datagrid>
  </List>
);
