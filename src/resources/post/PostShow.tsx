import { BooleanField, DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="publication_date" />
      <ReferenceField source="type_id" reference="post_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="state_id" reference="post_state">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="text" />
      <TextField source="url" />
      <ReferenceField source="master_post_id" reference="post">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="is_moment" />
      <TextField source="author_id" />
      <TextField source="name" />
      <DateField source="date" />
      <ReferenceField source="event_id" reference="event">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="latitude" />
      <NumberField source="longitude" />
      <TextField source="photos" />
      <TextField source="participants" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
