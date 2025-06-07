import { ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const NoteCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <TextInput source="pet_id" validate={[]} />
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="contact_id" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="record_id" validate={[]} />
          <ReferenceInput source="entity_schema_id" reference="entity_schema_lookup">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="litter_id" reference="litter">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
