// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PetLifecycleShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Day" required={false} value={<NumberField source="day" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Pet Lifecycle Event Id" required={false} value={<ReferenceField source="pet_lifecycle_event_id" reference="pet_lifecycle_event"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="pet_lifecycle_event_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
