import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ProducerCardCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_lifecycle_event_id" reference="pet_lifecycle_event">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="datet"  />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="day"  />
          <TextInput source="description"  />
          <ReferenceInput source="pet_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
