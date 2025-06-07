// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";



export const CompetitionBackupShow = ({ record }: any) => (
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
        <Labeled label="Exists Award" required={false} value={<BooleanField source="exists_award" />} />
        <Labeled label="Exists Place" required={false} value={<BooleanField source="exists_place" />} />
        <Labeled label="Exists Qualification" required={false} value={<BooleanField source="exists_qualification" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Provider Id" required={false} value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="competition_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
