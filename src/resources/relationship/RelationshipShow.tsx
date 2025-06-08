// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const RelationshipShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Relation Type Id" required={false} value={<ReferenceField source="relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Reverse Relation Type Id" required={false} value={<ReferenceField source="reverse_relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Active" required={false} value={<BooleanField source="active" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Account A Id" required={false} value={<ReferenceField source="account_a_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact A Id" required={false} value={<ReferenceField source="contact_a_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account B Id" required={false} value={<ReferenceField source="account_b_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact B Id" required={false} value={<ReferenceField source="contact_b_id" reference="contact"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
