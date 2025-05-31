// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const PetServiceByOptionsShow = ({ record }: any) => (
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
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="pet_status"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Sex Id" value={<ReferenceField source="sex_id" reference="sex"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Service Type Id" value={<ReferenceField source="service_type_id" reference="pet_service_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
