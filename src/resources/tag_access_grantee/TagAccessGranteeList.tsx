import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const TagAccessGranteeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const TagAccessGranteeList = () => (
  <List filters={TagAccessGranteeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="tag_access_id" reference="tag_access">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="can_tag" />
      <BooleanField source="can_create" />
      <BooleanField source="can_delete" />
      <BooleanField source="can_edit" />
      <BooleanField source="can_read" />
    </Datagrid>
  </List>
);
