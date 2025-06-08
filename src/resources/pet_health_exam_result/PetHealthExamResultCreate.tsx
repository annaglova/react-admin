import { DateInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetHealthExamResultCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id"  />
          <ReferenceInput source="health_exam_object_id" reference="health_exam_object">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="health_exam_result_id" reference="health_exam_result">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <DateInput source="date"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
