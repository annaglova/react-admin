import { ReferenceInput, SelectInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CoatTypeInBreedCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="coat_type_id" reference="coat_type">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
