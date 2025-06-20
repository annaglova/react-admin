// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const TopPetInBreedShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      null
    }
    fieldsLeft={
      <>
        <Labeled label="Breed Id" required={false} value={<TextField source="breed_id" />} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Placement" required={false} value={<NumberField source="placement" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Period Start" required={false} value={<DateField source="period_start" />} />
        <Labeled label="Period End" required={false} value={<DateField source="period_end" />} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
      </>
    }
  />
);
