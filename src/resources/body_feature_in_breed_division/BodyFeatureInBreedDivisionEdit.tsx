import { ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BodyFeatureInBreedDivisionEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="body_feature_id" reference="body_feature">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="breed_division_id" reference="breed_division">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
