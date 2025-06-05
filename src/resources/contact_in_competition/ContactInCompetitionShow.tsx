// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const ContactInCompetitionShow = ({ record }: any) => (
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
        <Labeled label="International Judgment" required={false} value={<BooleanField source="international_judgment" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="National Judgment" required={false} value={<BooleanField source="national_judgment" />} />
        <Labeled label="Competition Id" required={false} value={<ReferenceField source="competition_id" reference="competition"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
