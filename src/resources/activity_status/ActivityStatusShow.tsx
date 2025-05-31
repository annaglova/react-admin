// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const ActivityStatusShow = ({ record }: any) => (
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
        <Labeled label="Code" value={<TextField source="code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Finish" value={<BooleanField source="finish" />} />
        <Labeled label="Color" value={<TextField source="color" />} />
      </>
    }
  />
);
