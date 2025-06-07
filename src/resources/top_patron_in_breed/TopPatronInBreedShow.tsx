// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const TopPatronInBreedShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
        <Labeled label="Place" required={false} value={<NumberField source="place" />} />
      </>
    }
  />
);
