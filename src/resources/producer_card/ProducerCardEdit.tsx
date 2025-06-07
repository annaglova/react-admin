import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ProducerCardEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="pet_id"  />
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
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
