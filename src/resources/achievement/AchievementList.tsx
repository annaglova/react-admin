import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const AchievementFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AchievementList = () => (
  <List filters={AchievementFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="category_id" />
      <NumberField source="int_value" />
      <NumberField source="position" />
    </Datagrid>
  </List>
);
