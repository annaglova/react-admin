// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const RelationTypeShow = ({ record }: any) => (
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
        <Labeled label="For Contact Contact" value={<BooleanField source="for_contact_contact" />} />
        <Labeled label="For Account Contact" value={<BooleanField source="for_account_contact" />} />
        <Labeled label="For Contact Account" value={<BooleanField source="for_contact_account" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="For Account Account" value={<BooleanField source="for_account_account" />} />
        <Labeled label="Reverse Relation Type Id" value={<ReferenceField source="reverse_relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Include Into Container" value={<BooleanField source="include_into_container" />} />
      </>
    }
  />
);
