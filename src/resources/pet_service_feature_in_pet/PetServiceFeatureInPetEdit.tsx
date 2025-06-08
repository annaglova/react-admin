import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetServiceFeatureInPetEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id"  />
          <ReferenceInput source="pet_service_feature_id" reference="pet_service_feature">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_service_type_id" reference="pet_service_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
