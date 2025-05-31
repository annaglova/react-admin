// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const EntitySchemaLookupShow = ({ record }: any) => (
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
        <Labeled label="Is Public" value={<BooleanField source="is_public" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Public Name" value={<TextField source="public_name" />} />
      </>
    }
  />
);
