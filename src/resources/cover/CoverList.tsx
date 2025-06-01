import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CoverFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CoverList = () => (
  <List filters={CoverFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="redirect_url" />
      <TextField source="avatar_url" />
      <ReferenceField source="type_id" reference="cover_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
      <TextField source="url" />
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="is_default" />
    </Datagrid>
  </List>
);
