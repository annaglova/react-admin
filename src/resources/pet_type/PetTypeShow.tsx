// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const PetTypeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Pet Profile Count" value={<NumberField source="pet_profile_count" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Organization Count" value={<NumberField source="organization_count" />} />
        <Labeled label="Profile Count" value={<NumberField source="profile_count" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Patron Count" value={<NumberField source="patron_count" />} />
        <Labeled label="Kennel Count" value={<NumberField source="kennel_count" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Event Count" value={<NumberField source="event_count" />} />
        <Labeled label="Public Data Id" value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
