import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CollectionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <BooleanField source="private" />
      <TextField source="entity_name" />
      <BooleanField source="auto" />
      <ReferenceField source="type_id" reference="collection_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="avatar_url" />
      <TextField source="url" />
      <TextField source="name" />
      <TextField source="notes" />
      <DateField source="update_date" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
    </SimpleShowLayout>
  </Show>
);
