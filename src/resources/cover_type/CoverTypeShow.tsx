// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const CoverTypeShow = ({ record }: any) => (
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
        <Labeled label="Priority" value={<NumberField source="priority" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="System" value={<BooleanField source="system" />} />
      </>
    }
  />
);
