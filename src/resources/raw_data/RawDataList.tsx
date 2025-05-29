import { Datagrid, DateField, List, TextField, TextInput } from "react-admin";

const RawDataFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RawDataList = () => (
  <List filters={RawDataFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="json" />
      <TextField source="status_id" />
      <TextField source="log" />
      <TextField source="conf_item_id" />
      <TextField source="redirect_url" />
      <TextField source="record_id" />
      <TextField source="entity_name" />
      <TextField source="model" />
      <TextField source="hash_md5" />
      <TextField source="contact_id" />
      <TextField source="account_id" />
      <TextField source="breed_id" />
      <TextField source="event_id" />
      <TextField source="project_id" />
      <TextField source="pet_id" />
    </Datagrid>
  </List>
);
