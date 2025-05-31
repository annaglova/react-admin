import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PublicDataShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="hash_md5" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="contact_id" />
      <TextField source="pet_id" />
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="event_id" reference="event">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="record_id" />
      <TextField source="model" />
      <TextField source="entity_name" />
      <BooleanField source="primary" />
      <ReferenceField source="redirect_id" reference="public_data">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="pet_titles_id" reference="title_in_pet">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="has_owner" />
      <TextField source="pet_breed_id" />
    </SimpleShowLayout>
  </Show>
);
