import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const NoteEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes"  />
          <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="contact_id"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="owner_id"  />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="record_id"  />
          <ReferenceInput source="entity_schema_id" reference="entity_schema_lookup">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="litter_id" reference="litter">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
