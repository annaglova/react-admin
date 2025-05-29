import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ProjectCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ProjectCategoryList = () => (
  <List filters={ProjectCategoryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="event_type_id" />
    </Datagrid>
  </List>
);
