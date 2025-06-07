import { NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetPedigreeCycleEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="position"  />
          <TextInput source="pet_id"  />
          <TextInput source="group_id"  />
          <ReferenceInput source="member_type_id" reference="pet_pedigree_cycle_member_type">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="pet_member_id"  />
          <TextInput source="pet_root_id"  />
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
