import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const TagAccessGranteeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const TagAccessGranteeList = () => (
  <List filters={TagAccessGranteeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <ReferenceField source="tag_access_id" reference="tag_access" label="Tag Access Id">
  <TextField source="name" />
</ReferenceField>
      <BooleanField source="can_tag" label="Can Tag" />
      <BooleanField source="can_create" label="Can Create" />
      <BooleanField source="can_delete" label="Can Delete" />
      <BooleanField source="can_edit" label="Can Edit" />
      <BooleanField source="can_read" label="Can Read" />
    </Datagrid>
  </List>
);
