// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const CollectionShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Private" value={<BooleanField source="private" />} />
        <Labeled label="Entity Name" value={<TextField source="entity_name" />} />
        <Labeled label="Auto" value={<BooleanField source="auto" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="collection_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Update Date" value={<DateField source="update_date" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
      </>
    }
  />
);
