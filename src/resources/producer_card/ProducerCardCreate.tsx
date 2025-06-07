import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ProducerCardCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id" validate={[]} />
          <ReferenceInput source="pet_lifecycle_event_id" reference="pet_lifecycle_event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="datet" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="day" validate={[]} />
          <TextInput source="description" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
