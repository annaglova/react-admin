import { ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetInActivityCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="award_id" reference="award">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="place_id" reference="place">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="qualification_id" reference="pet_qualification">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="activity_id" reference="activity">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
