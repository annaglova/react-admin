// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ContactRatingShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Rating Type Id" required={false} value={<ReferenceField source="rating_type_id" reference="rating_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
