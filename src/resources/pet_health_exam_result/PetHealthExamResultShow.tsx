// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PetHealthExamResultShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Pet Id" required={false} value={<ReferenceField source="pet_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Health Exam Object Id" required={false} value={<ReferenceField source="health_exam_object_id" reference="health_exam_object"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Health Exam Result Id" required={false} value={<ReferenceField source="health_exam_result_id" reference="health_exam_result"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Pet Breed Id" required={false} value={<ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
