// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const PublicDataShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Hash Md5" value={<TextField source="hash_md5" />} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Pet Id" value={<TextField source="pet_id" />} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Record Id" value={<TextField source="record_id" />} />
        <Labeled label="Model" value={<TextField source="model" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Entity Name" value={<TextField source="entity_name" />} />
        <Labeled label="Primary" value={<BooleanField source="primary" />} />
        <Labeled label="Redirect Id" value={<ReferenceField source="redirect_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Type Id" value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Titles Id" value={<ReferenceField source="pet_titles_id" reference="title_in_pet"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Has Owner" value={<BooleanField source="has_owner" />} />
        <Labeled label="Pet Breed Id" value={<TextField source="pet_breed_id" />} />
      </>
    }
  />
);
