import { NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetPedigreeCycleCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="position" validate={[]} />
          <TextInput source="pet_id" validate={[]} />
          <TextInput source="group_id" validate={[]} />
          <ReferenceInput source="member_type_id" reference="pet_pedigree_cycle_member_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="pet_member_id" validate={[]} />
          <TextInput source="pet_root_id" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
