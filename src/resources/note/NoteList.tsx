import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const NoteFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const NoteList = () => (
  <List filters={NoteFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="pet_id" />
      <TextField source="project_id" />
      <TextField source="event_id" />
      <TextField source="contact_id" />
      <TextField source="account_id" />
      <TextField source="breed_id" />
      <TextField source="owner_id" />
      <TextField source="cover_id" />
      <TextField source="record_id" />
      <TextField source="entity_schema_id" />
      <TextField source="litter_id" />
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
