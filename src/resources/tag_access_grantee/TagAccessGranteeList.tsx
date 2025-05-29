import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const TagAccessGranteeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const TagAccessGranteeList = () => (
  <List filters={TagAccessGranteeFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="tag_access_id" />
      <BooleanField source="can_tag" />
      <BooleanField source="can_create" />
      <BooleanField source="can_delete" />
      <BooleanField source="can_edit" />
      <BooleanField source="can_read" />
    </Datagrid>
  </List>
);
