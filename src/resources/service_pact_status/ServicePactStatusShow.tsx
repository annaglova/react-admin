// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const ServicePactStatusShow = ({ record }: any) => (
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
        <Labeled label="Is Active" value={<BooleanField source="is_active" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Color" value={<TextField source="color" />} />
      </>
    }
  />
);
