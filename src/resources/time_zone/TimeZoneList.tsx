import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const TimeZoneFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const TimeZoneList = () => (
  <List filters={TimeZoneFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <TextField source="offset" />
      <TextField source="code_american" />
    </Datagrid>
  </List>
);
