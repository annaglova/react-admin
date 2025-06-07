// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const PetServiceInLitterShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Currency Id" required={false} value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Price" required={false} value={<NumberField source="price" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Service Type Id" required={false} value={<ReferenceField source="service_type_id" reference="pet_service_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Litter Id" required={false} value={<ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Service Status Id" required={false} value={<ReferenceField source="pet_service_status_id" reference="pet_service_status"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
