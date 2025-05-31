// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const CoverShow = ({ record }: any) => (
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
        <Labeled label="Redirect Url" value={<TextField source="redirect_url" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="cover_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Is Default" value={<BooleanField source="is_default" />} />
      </>
    }
  />
);
