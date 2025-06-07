import { ReferenceInput, SelectInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetSizeInBreedDivisionCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_size_id" reference="pet_size">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="breed_division_id" reference="breed_division">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
