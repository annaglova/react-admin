import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const RawDataFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RawDataList = () => (
  <List filters={RawDataFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <TextField source="notes" label="Notes" />
      <TextField source="json" label="Json" />
      <ReferenceField source="status_id" reference="raw_data_status" label="Status Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="log" label="Log" />
      <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="redirect_url" label="Redirect Url" />
      <TextField source="record_id" label="Record Id" />
      <TextField source="entity_name" label="Entity Name" />
      <TextField source="model" label="Model" />
      <TextField source="hash_md5" label="Hash Md5" />
      <TextField source="contact_id" label="Contact Id" />
      <TextField source="account_id" label="Account Id" />
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="event_id" reference="event" label="Event Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="project_id" reference="project" label="Project Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="pet_id" label="Pet Id" />
    </Datagrid>
  </List>
);
