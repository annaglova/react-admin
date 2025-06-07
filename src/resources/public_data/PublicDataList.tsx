import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PublicDataFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PublicDataList = () => (
  <List filters={PublicDataFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="hash_md5" label="Hash Md5" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="contact_id" label="Contact Id" />
      <TextField source="pet_id" label="Pet Id" />
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="event_id" reference="event" label="Event Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="project_id" reference="project" label="Project Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="record_id" label="Record Id" />
      <TextField source="model" label="Model" />
      <TextField source="entity_name" label="Entity Name" />
      <BooleanField source="primary" label="Primary" />
      <ReferenceField source="redirect_id" reference="public_data" label="Redirect Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="country_id" reference="country" label="Country Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="pet_titles_id" reference="title_in_pet" label="Pet Titles Id">
  <TextField source="name" />
</ReferenceField>
      <BooleanField source="has_owner" label="Has Owner" />
      <TextField source="pet_breed_id" label="Pet Breed Id" />
    </Datagrid>
  </List>
);
