import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const PetTypeFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetTypeList = () => (
  <List filters={PetTypeFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="pet_profile_count" />
      <TextField source="url" />
      <NumberField source="organization_count" />
      <NumberField source="profile_count" />
      <NumberField source="patron_count" />
      <NumberField source="kennel_count" />
      <TextField source="avatar_url" />
      <NumberField source="event_count" />
      <ReferenceField source="public_data_id" reference="public_data">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
