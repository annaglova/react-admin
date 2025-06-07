import { DateInput, NumberInput, ReferenceInput, SelectInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetServiceInLitterCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <DateInput source="date" validate={[]} />
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="price" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="service_type_id" reference="pet_service_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="litter_id" reference="litter">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="pet_service_status_id" reference="pet_service_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
