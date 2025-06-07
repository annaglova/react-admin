import { ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const HealthExamResultEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="object_id" reference="health_exam_object">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
