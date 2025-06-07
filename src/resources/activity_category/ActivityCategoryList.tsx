import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ActivityCategoryFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityCategoryList = () => (
  <List filters={ActivityCategoryFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="description" label="Description" />
      <ReferenceField source="activity_type_id" reference="activity_type" label="Activity Type Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
