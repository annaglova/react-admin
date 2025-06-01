import { BooleanField, Datagrid, DateField, List, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CollectionFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CollectionList = () => (
  <List filters={CollectionFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <BooleanField source="private" />
      <TextField source="entity_name" />
      <BooleanField source="auto" />
      <ReferenceField source="type_id" reference="collection_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="avatar_url" />
      <TextField source="url" />
      <TextField source="notes" />
      <DateField source="update_date" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
    </Datagrid>
  </List>
);
