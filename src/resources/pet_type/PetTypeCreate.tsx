import { NumberInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <NumberInput source="pet_profile_count" />
          <TextInput source="url" />
          <NumberInput source="organization_count" />
          <NumberInput source="profile_count" />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="patron_count" />
          <NumberInput source="kennel_count" />
          <TextInput source="avatar_url" />
          <NumberInput source="event_count" />
          <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
