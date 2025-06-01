import { BooleanInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetServiceTypeByEntityCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="entity_name" />
          <ReferenceInput source="pet_service_type_id" reference="pet_service_type">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="transfer_to_litter" />
          <BooleanInput source="transfer_to_account" />
      </>
    }
  />
);
