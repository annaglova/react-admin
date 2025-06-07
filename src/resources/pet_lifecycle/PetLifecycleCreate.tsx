import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetLifecycleCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="day" validate={[]} />
          <TextInput source="description" validate={[]} />
          <DateInput source="date" validate={[]} />
          <ReferenceInput source="pet_lifecycle_event_id" reference="pet_lifecycle_event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="pet_id" validate={[]} />
          <ReferenceInput source="status_id" reference="pet_lifecycle_event_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
