import { ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoatColorInBreedEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={required()} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="coat_color_id" reference="coat_color">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
