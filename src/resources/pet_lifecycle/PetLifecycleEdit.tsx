import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetLifecycleEdit = () => (
  <ResourceEditLayout
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
        <TextInput source="pet_id"  />
          <ReferenceInput source="status_id" reference="pet_lifecycle_event_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
