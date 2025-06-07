import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const AchievementFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AchievementList = () => (
  <List filters={AchievementFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <ReferenceField source="category_id" reference="achievement_category" label="Category Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="int_value" label="Int Value" />
      <NumberField source="position" label="Position" />
    </Datagrid>
  </List>
);
