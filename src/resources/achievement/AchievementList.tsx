import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

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
      <ReferenceField source="category_id" reference="achievement_category">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="int_value" />
      <NumberField source="position" />
    </Datagrid>
  </List>
);
