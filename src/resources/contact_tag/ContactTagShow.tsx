// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const ContactTagShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Color" value={<TextField source="color" />} />
      </>
    }
    fieldsRight={
      <>
        
      </>
    }
  />
);
