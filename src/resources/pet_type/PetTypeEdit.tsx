import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="pet_profile_count"  />
          <TextInput source="url"  />
          <NumberInput source="organization_count"  />
          <NumberInput source="profile_count"  />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="patron_count"  />
          <NumberInput source="kennel_count"  />
          <TextInput source="avatar_url"  />
          <NumberInput source="event_count"  />
          <ReferenceInput source="public_data_id" reference="public_data">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
