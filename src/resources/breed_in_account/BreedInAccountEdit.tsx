import { NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedInAccountEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_standard_id" reference="breed_standard">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="pet_count"  />
      </>
    }
  />
);
