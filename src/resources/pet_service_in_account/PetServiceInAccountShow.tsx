// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PetServiceInAccountShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Active" required={false} value={<BooleanField source="active" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Service Type Id" required={false} value={<ReferenceField source="service_type_id" reference="pet_service_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Service Status Id" required={false} value={<ReferenceField source="pet_service_status_id" reference="pet_service_status"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
