import { Datagrid, List, Pagination, TextField, TextInput } from "react-admin";

const TimeZoneFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const TimeZoneList = () => (
  <List filters={TimeZoneFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="code" label="Code *" />
      <TextField source="offset" label="Offset" />
      <TextField source="code_american" label="Code American" />
    </Datagrid>
  </List>
);
