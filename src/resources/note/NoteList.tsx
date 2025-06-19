import { Datagrid, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const NoteFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const NoteList = () => (
  <List filters={NoteFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="notes" label="Notes" />
      <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="project_id" reference="project" label="Project Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="event_id" reference="event" label="Event Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="contact_id" label="Contact Id" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="record_id" label="Record Id" />
      <ReferenceField source="entity_schema_id" reference="entity_schema_lookup" label="Entity Schema Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="litter_id" reference="litter" label="Litter Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
