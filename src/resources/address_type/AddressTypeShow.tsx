// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const AddressTypeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="For Contact" value={<BooleanField source="for_contact" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="For Account" value={<BooleanField source="for_account" />} />
        <Labeled label="Color" value={<TextField source="color" />} />
      </>
    }
  />
);
