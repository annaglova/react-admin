// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const CoverInPetShow = ({ record }: any) => (
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
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Setup Date" required={false} value={<DateField source="setup_date" />} />
        <Labeled label="Pet Breed Id" required={false} value={<ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
