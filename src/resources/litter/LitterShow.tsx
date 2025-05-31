// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const LitterShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Father Id" value={<TextField source="father_id" />} />
        <Labeled label="Mother Id" value={<TextField source="mother_id" />} />
        <Labeled label="Pet Type Id" value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Mating Period Id" value={<ReferenceField source="mating_period_id" reference="period"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date Of Birth" value={<DateField source="date_of_birth" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="litter_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Kennel Id" value={<ReferenceField source="kennel_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breeder Id" value={<TextField source="breeder_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Letter Id" value={<ReferenceField source="letter_id" reference="letter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Male Amount" value={<NumberField source="male_amount" />} />
        <Labeled label="Female Amount" value={<NumberField source="female_amount" />} />
        <Labeled label="Is Public" value={<BooleanField source="is_public" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Start Date" value={<DateField source="start_date" />} />
        <Labeled label="End Date" value={<DateField source="end_date" />} />
      </>
    }
  />
);
