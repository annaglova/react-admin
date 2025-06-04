import { ReferenceInput, SelectInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoatTypeInBreedEdit = () => (
  <ResourceEditLayout
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
