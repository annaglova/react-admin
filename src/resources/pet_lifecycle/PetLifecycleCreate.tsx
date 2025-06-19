import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetLifecycleCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <NumberInput source="day"  />
          <TextInput source="description"  />
          <DateInput source="date"  />
          <ReferenceInput source="pet_lifecycle_event_id" reference="pet_lifecycle_event">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="pet_lifecycle_event_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
