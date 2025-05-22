import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const NoteFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const NoteList = () => (
  <List filters={NoteFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <TextField source="notes" />
      <ReferenceField source="pet_id" reference="pets" />
      <ReferenceField source="project_id" reference="projects" />
      <ReferenceField source="event_id" reference="events" />
      <ReferenceField source="contact_id" reference="contacts" />
      <ReferenceField source="account_id" reference="accounts" />
      <ReferenceField source="breed_id" reference="breeds" />
      <ReferenceField source="owner_id" reference="owners" />
      <ReferenceField source="cover_id" reference="covers" />
      <ReferenceField source="record_id" reference="records" />
      <ReferenceField source="entity_schema_id" reference="entity_schemas" />
      <ReferenceField source="litter_id" reference="litter" />
      <ReferenceField source="pet_breed_id" reference="pet_breeds" />
    </Datagrid>
  </List>
);
