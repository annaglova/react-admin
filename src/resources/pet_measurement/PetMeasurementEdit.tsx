import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetMeasurementEdit = () => (
  <ResourceEditLayout
    name={
      <>{<NumberInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <NumberInput source="day"  />
          <DateInput source="date"  />
          <TextInput source="pet_id"  />
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
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
