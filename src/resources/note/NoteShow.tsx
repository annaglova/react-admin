// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const NoteShow = ({ record }: any) => (
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
        <Labeled label="Pet Id" value={<TextField source="pet_id" />} />
        <Labeled label="Project Id" value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Record Id" value={<TextField source="record_id" />} />
        <Labeled label="Entity Schema Id" value={<ReferenceField source="entity_schema_id" reference="entity_schema_lookup"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Litter Id" value={<ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Breed Id" value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
