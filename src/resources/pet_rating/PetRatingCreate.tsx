import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetRatingCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="rating" validate={[]} />
          <TextInput source="pet_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="contact_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
