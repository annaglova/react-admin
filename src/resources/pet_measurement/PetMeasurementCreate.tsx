import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetMeasurementCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<NumberInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <NumberInput source="day"  />
          <DateInput source="date"  />
          <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="measurement_type_id" reference="measurement_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="unit_id" reference="unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="active_synchronization"  />
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
