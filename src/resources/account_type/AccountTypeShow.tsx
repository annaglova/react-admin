// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const AccountTypeShow = ({ record }: any) => (
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
        <Labeled label="Raw Data Model" value={<TextField source="raw_data_model" />} />
        <Labeled label="Color" value={<TextField source="color" />} />
      </>
    }
  />
);
