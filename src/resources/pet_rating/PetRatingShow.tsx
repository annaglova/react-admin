// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const PetRatingShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Contact Id" required={false} value={<ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
