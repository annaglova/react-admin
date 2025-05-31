import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const NoteShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="pet_id" />
      <ReferenceField source="project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="event_id" reference="event">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="contact_id" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="record_id" />
      <ReferenceField source="entity_schema_id" reference="entity_schema_lookup">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="litter_id" reference="litter">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_breed_id" />
    </SimpleShowLayout>
  </Show>
);
