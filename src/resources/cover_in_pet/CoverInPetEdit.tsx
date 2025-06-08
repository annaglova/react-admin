import { DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoverInPetEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id"  />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <DateInput source="setup_date"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
