import { Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const ActivityPriorityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityPriorityList = () => (
  <List filters={ActivityPriorityFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <TextField source="img" label="Img" />
    </Datagrid>
  </List>
);
