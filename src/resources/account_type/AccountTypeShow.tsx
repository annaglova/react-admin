// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const AccountTypeShow = ({ record }: any) => (
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
        <Labeled label="Priority" required={false} value={<NumberField source="priority" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Raw Data Model" required={false} value={<TextField source="raw_data_model" />} />
        <Labeled label="Color" required={false} value={<TextField source="color" />} />
      </>
    }
  />
);
