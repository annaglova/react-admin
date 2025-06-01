import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const NoteFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const NoteList = () => (
  <List filters={NoteFilters} pagination={<Pagination rowsPerPageOptions={[12]} />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="pet_id" />
      <ReferenceField source="project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="event_id" reference="event">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="contact_id" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="record_id" />
      <ReferenceField source="entity_schema_id" reference="entity_schema_lookup">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="litter_id" reference="litter">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
