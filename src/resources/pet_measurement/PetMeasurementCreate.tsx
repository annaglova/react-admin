import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetMeasurementCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<NumberInput source="value" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <NumberInput source="day" validate={[]} />
          <DateInput source="date" validate={[]} />
          <TextInput source="pet_id" validate={[]} />
          <ReferenceInput source="measurement_type_id" reference="measurement_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="unit_id" reference="unit">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="active_synchronization" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
