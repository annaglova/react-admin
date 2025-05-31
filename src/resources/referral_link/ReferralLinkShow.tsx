// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const ReferralLinkShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Code" value={<TextField source="code" />} />
      </>
    }
  />
);
