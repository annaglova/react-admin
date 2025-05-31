// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const BreedSectionShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Code" value={<NumberField source="code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Breed Group Id" value={<ReferenceField source="breed_group_id" reference="breed_group"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
