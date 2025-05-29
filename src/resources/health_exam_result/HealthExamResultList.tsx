import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const HealthExamResultFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const HealthExamResultList = () => (
  <List filters={HealthExamResultFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="object_id" />
    </Datagrid>
  </List>
);
