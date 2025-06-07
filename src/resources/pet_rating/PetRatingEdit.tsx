import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetRatingEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="rating"  />
          <TextInput source="pet_id"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="contact_id" reference="contact">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
