// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const BreedShow = ({ record }: any) => (
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
        <Labeled label="Pet Type Id" value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Differ By Coat Color" value={<BooleanField source="differ_by_coat_color" />} />
        <Labeled label="Differ By Coat Type" value={<BooleanField source="differ_by_coat_type" />} />
        <Labeled label="Differ By Size" value={<BooleanField source="differ_by_size" />} />
        <Labeled label="Language Id" value={<ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Authentic Name" value={<TextField source="authentic_name" />} />
        <Labeled label="Differ By Body Feature" value={<BooleanField source="differ_by_body_feature" />} />
        <Labeled label="Pet Profile Count" value={<NumberField source="pet_profile_count" />} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="breed_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Kennel Count" value={<NumberField source="kennel_count" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Has Related Breed" value={<BooleanField source="has_related_breed" />} />
        <Labeled label="Admin Name" value={<TextField source="admin_name" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Patron Count" value={<NumberField source="patron_count" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Rating" value={<NumberField source="rating" />} />
        <Labeled label="Achievement Progress" value={<NumberField source="achievement_progress" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Payment Rating" value={<NumberField source="payment_rating" />} />
        <Labeled label="Public Data Id" value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
