// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const PetInProjectShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Project Id" required={false} value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Number" required={false} value={<NumberField source="number" />} />
        <Labeled label="Class Id" required={false} value={<ReferenceField source="class_id" reference="pet_class"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Web Link" required={false} value={<TextField source="web_link" />} />
        <Labeled label="Result" required={false} value={<TextField source="result" />} />
        <Labeled label="Code" required={false} value={<TextField source="code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Handler Id" required={false} value={<ReferenceField source="handler_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Judge Id" required={false} value={<TextField source="judge_id" />} />
        <Labeled label="Place Id" required={false} value={<ReferenceField source="place_id" reference="place"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Qualification Id" required={false} value={<ReferenceField source="qualification_id" reference="pet_qualification"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Temp Project Name" required={false} value={<TextField source="temp_project_name" />} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
