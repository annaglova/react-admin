import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetAdditionalInfoCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="pet_additional_info_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
