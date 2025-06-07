import { BooleanField, Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CoverFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CoverList = () => (
  <List filters={CoverFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="notes" label="Notes" />
      <TextField source="redirect_url" label="Redirect Url" />
      <TextField source="avatar_url" label="Avatar Url" />
      <ReferenceField source="type_id" reference="cover_type" label="Type Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" label="Owner Id" />
      <TextField source="url" label="Url" />
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="is_default" label="Is Default" />
    </Datagrid>
  </List>
);
