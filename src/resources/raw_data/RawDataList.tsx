import { Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const RawDataFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const RawDataList = () => (
  <List filters={RawDataFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="json" />
      <ReferenceField source="status_id" reference="raw_data_status">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="log" />
      <ReferenceField source="conf_item_id" reference="conf_item">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="redirect_url" />
      <TextField source="record_id" />
      <TextField source="entity_name" />
      <TextField source="model" />
      <TextField source="hash_md5" />
      <TextField source="contact_id" />
      <TextField source="account_id" />
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="event_id" reference="event">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_id" />
    </Datagrid>
  </List>
);
