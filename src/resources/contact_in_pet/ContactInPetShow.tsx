// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ContactInPetShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Contact Role Id" required={false} value={<ReferenceField source="contact_role_id" reference="contact_role_for_pet"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
      </>
    }
  />
);
