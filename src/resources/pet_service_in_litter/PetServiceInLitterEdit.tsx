import { DateInput, NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetServiceInLitterEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <DateInput source="date"  />
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="price"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="service_type_id" reference="pet_service_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="litter_id" reference="litter">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_service_status_id" reference="pet_service_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
