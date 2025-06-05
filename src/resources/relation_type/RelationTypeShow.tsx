// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const RelationTypeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="For Contact Contact" required={false} value={<BooleanField source="for_contact_contact" />} />
        <Labeled label="For Account Contact" required={false} value={<BooleanField source="for_account_contact" />} />
        <Labeled label="For Contact Account" required={false} value={<BooleanField source="for_contact_account" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="For Account Account" required={false} value={<BooleanField source="for_account_account" />} />
        <Labeled label="Reverse Relation Type Id" required={false} value={<ReferenceField source="reverse_relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Include Into Container" required={false} value={<BooleanField source="include_into_container" />} />
      </>
    }
  />
);
