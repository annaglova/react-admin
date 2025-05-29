import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const AchievementCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AchievementCategoryList = () => (
  <List filters={AchievementCategoryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
