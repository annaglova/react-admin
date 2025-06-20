import { DateInput, NumberInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TopPetInBreedEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="breed_id"  />
          <TextInput source="pet_id"  />
          <NumberInput source="placement"  />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="period_start"  />
          <DateInput source="period_end"  />
          <NumberInput source="rating"  />
      </>
    }
  />
);
