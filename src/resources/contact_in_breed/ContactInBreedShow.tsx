// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ContactInBreedShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" required={false} value={<ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Place" required={false} value={<NumberField source="place" />} />
        <Labeled label="Contact Role Id" required={false} value={<ReferenceField source="contact_role_id" reference="contact_role"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
