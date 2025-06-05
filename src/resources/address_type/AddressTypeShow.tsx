// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const AddressTypeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="For Contact" required={false} value={<BooleanField source="for_contact" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="For Account" required={false} value={<BooleanField source="for_account" />} />
        <Labeled label="Color" required={false} value={<TextField source="color" />} />
      </>
    }
  />
);
