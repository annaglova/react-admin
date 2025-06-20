import { BooleanInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetServiceInAccountCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="active"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="service_type_id" reference="pet_service_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_service_status_id" reference="pet_service_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
