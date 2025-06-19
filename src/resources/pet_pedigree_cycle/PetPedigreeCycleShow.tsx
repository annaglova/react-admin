// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PetPedigreeCycleShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Position" required={false} value={<NumberField source="position" />} />
        <Labeled label="Pet Id" required={false} value={<ReferenceField source="pet_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Group Id" required={false} value={<TextField source="group_id" />} />
        <Labeled label="Member Type Id" required={false} value={<ReferenceField source="member_type_id" reference="pet_pedigree_cycle_member_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Pet Member Id" required={false} value={<TextField source="pet_member_id" />} />
        <Labeled label="Pet Root Id" required={false} value={<TextField source="pet_root_id" />} />
        <Labeled label="Pet Breed Id" required={false} value={<ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
