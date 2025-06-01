// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const PetServiceTypeByEntityShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Entity Name" value={<TextField source="entity_name" />} />
        <Labeled label="Pet Service Type Id" value={<ReferenceField source="pet_service_type_id" reference="pet_service_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Transfer To Litter" value={<BooleanField source="transfer_to_litter" />} />
        <Labeled label="Transfer To Account" value={<BooleanField source="transfer_to_account" />} />
      </>
    }
  />
);
