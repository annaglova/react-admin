// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PetInActivityShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Award Id" required={false} value={<ReferenceField source="award_id" reference="award"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Place Id" required={false} value={<ReferenceField source="place_id" reference="place"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Qualification Id" required={false} value={<ReferenceField source="qualification_id" reference="pet_qualification"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Activity Id" required={false} value={<ReferenceField source="activity_id" reference="activity"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
