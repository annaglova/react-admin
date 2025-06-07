// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const PetAdditionalInfoShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Value" required={false} value={<TextField source="value" />} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="pet_additional_info_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
