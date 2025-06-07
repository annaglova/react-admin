// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const BreedSubsectionShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Breed Section Id" required={false} value={<ReferenceField source="breed_section_id" reference="breed_section"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Breed Group Id" required={false} value={<ReferenceField source="breed_group_id" reference="breed_group"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Code" required={false} value={<NumberField source="code" />} />
      </>
    }
  />
);
