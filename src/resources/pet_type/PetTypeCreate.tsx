import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <NumberInput source="pet_profile_count" validate={[]} />
          <TextInput source="url" validate={[]} />
          <NumberInput source="organization_count" validate={[]} />
          <NumberInput source="profile_count" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="patron_count" validate={[]} />
          <NumberInput source="kennel_count" validate={[]} />
          <TextInput source="avatar_url" validate={[]} />
          <NumberInput source="event_count" validate={[]} />
          <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
