import { ReferenceInput, SelectInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CoatColorInBreedCreate = () => (
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
        <ReferenceInput source="coat_color_id" reference="coat_color">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
