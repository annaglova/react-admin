import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TopPetInBreedEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
