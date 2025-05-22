import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const RawDataFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RawDataList = () => (
  <List filters={RawDataFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="json" />
      <ReferenceField source="status_id" reference="statuses" />
      <DateField source="log" />
      <ReferenceField source="conf_item_id" reference="conf_items" />
      <TextField source="redirect_url" />
      <ReferenceField source="record_id" reference="records" />
      <TextField source="entity_name" />
      <DateField source="model" />
      <TextField source="hash_md5" />
      <ReferenceField source="contact_id" reference="contacts" />
      <ReferenceField source="account_id" reference="accounts" />
      <ReferenceField source="breed_id" reference="breeds" />
      <ReferenceField source="event_id" reference="events" />
      <ReferenceField source="project_id" reference="projects" />
      <ReferenceField source="pet_id" reference="pets" />
    </Datagrid>
  </List>
);
