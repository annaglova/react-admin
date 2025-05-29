import { BooleanField, Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const PublicDataFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const PublicDataList = () => (
  <List filters={PublicDataFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="hash_md5" />
      <TextField source="account_id" />
      <TextField source="contact_id" />
      <TextField source="pet_id" />
      <TextField source="breed_id" />
      <TextField source="event_id" />
      <TextField source="project_id" />
      <TextField source="record_id" />
      <TextField source="model" />
      <TextField source="entity_name" />
      <BooleanField source="primary" />
      <TextField source="redirect_id" />
      <TextField source="pet_type_id" />
      <TextField source="country_id" />
      <TextField source="pet_titles_id" />
      <BooleanField source="has_owner" />
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
