// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";


export const PetTypeShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Pet Profile Count" required={false} value={<NumberField source="pet_profile_count" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Organization Count" required={false} value={<NumberField source="organization_count" />} />
        <Labeled label="Profile Count" required={false} value={<NumberField source="profile_count" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Patron Count" required={false} value={<NumberField source="patron_count" />} />
        <Labeled label="Kennel Count" required={false} value={<NumberField source="kennel_count" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Event Count" required={false} value={<NumberField source="event_count" />} />
        <Labeled label="Public Data Id" required={false} value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
