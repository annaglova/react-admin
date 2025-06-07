import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CollectionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CollectionList = () => (
  <List filters={CollectionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Name" />
      <BooleanField source="private" label="Private" />
      <TextField source="entity_name" label="Entity Name" />
      <BooleanField source="auto" label="Auto" />
      <ReferenceField source="type_id" reference="collection_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="avatar_url" label="Avatar Url" />
      <TextField source="url" label="Url" />
      <TextField source="notes" label="Notes" />
      <DateField source="update_date" label="Update Date" />
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="owner_id" label="Owner Id" />
    </Datagrid>
  </List>
);
