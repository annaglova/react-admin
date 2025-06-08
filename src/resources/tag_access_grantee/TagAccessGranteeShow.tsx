// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const TagAccessGranteeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Tag Access Id" required={false} value={<ReferenceField source="tag_access_id" reference="tag_access"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Can Tag" required={false} value={<BooleanField source="can_tag" />} />
        <Labeled label="Can Create" required={false} value={<BooleanField source="can_create" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Can Delete" required={false} value={<BooleanField source="can_delete" />} />
        <Labeled label="Can Edit" required={false} value={<BooleanField source="can_edit" />} />
        <Labeled label="Can Read" required={false} value={<BooleanField source="can_read" />} />
      </>
    }
  />
);
