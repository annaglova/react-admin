import { Datagrid, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetTypeList = () => (
  <List filters={PetTypeFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <NumberField source="pet_profile_count" label="Pet Profile Count" />
      <TextField source="url" label="Url" />
      <NumberField source="organization_count" label="Organization Count" />
      <NumberField source="profile_count" label="Profile Count" />
      <NumberField source="patron_count" label="Patron Count" />
      <NumberField source="kennel_count" label="Kennel Count" />
      <TextField source="avatar_url" label="Avatar Url" />
      <NumberField source="event_count" label="Event Count" />
      <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
