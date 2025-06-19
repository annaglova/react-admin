import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetPedigreeCycleCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="position"  />
          <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
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
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
