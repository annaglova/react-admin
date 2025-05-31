import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PetTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="pet_profile_count" />
      <TextField source="url" />
      <NumberField source="organization_count" />
      <NumberField source="profile_count" />
      <NumberField source="patron_count" />
      <NumberField source="kennel_count" />
      <TextField source="avatar_url" />
      <NumberField source="event_count" />
      <ReferenceField source="public_data_id" reference="public_data">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
