import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const DnaMarkerInPetEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
