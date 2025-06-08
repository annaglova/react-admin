// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const TimeZoneShow = ({ record }: any) => (
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
        <Labeled label="Code" required={true} value={<TextField source="code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Offset" required={false} value={<TextField source="offset" />} />
        <Labeled label="Code American" required={false} value={<TextField source="code_american" />} />
      </>
    }
  />
);
