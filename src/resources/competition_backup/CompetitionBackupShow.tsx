// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const CompetitionBackupShow = ({ record }: any) => (
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
        <Labeled label="Exists Award" value={<BooleanField source="exists_award" />} />
        <Labeled label="Exists Place" value={<BooleanField source="exists_place" />} />
        <Labeled label="Exists Qualification" value={<BooleanField source="exists_qualification" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Pet Type Id" value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="competition_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
