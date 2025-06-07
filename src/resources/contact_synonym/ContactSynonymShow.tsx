// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ContactSynonymShow = ({ record }: any) => (
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
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Flag" required={false} value={<BooleanField source="flag" />} />
      </>
    }
  />
);
