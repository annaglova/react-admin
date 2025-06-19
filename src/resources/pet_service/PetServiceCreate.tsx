import { DateInput, NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetServiceCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="service_type_id" reference="pet_service_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="price"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_service_status_id" reference="pet_service_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="date"  />
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
