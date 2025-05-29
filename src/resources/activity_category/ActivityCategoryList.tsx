import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const ActivityCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityCategoryList = () => (
  <List filters={ActivityCategoryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="activity_type_id" />
    </Datagrid>
  </List>
);
