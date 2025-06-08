import { ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const HealthExamObjectInBreedCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="health_exam_object_id" reference="health_exam_object">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
