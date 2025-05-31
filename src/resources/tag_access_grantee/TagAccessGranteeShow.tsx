// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const TagAccessGranteeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Tag Access Id" value={<ReferenceField source="tag_access_id" reference="tag_access"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Can Tag" value={<BooleanField source="can_tag" />} />
        <Labeled label="Can Create" value={<BooleanField source="can_create" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Can Delete" value={<BooleanField source="can_delete" />} />
        <Labeled label="Can Edit" value={<BooleanField source="can_edit" />} />
        <Labeled label="Can Read" value={<BooleanField source="can_read" />} />
      </>
    }
  />
);
