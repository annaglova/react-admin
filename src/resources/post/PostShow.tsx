// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const PostShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Publication Date" value={<DateField source="publication_date" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="post_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="State Id" value={<ReferenceField source="state_id" reference="post_state"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Text" value={<TextField source="text" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Master Post Id" value={<ReferenceField source="master_post_id" reference="post"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Is Moment" value={<BooleanField source="is_moment" />} />
        <Labeled label="Author Id" value={<TextField source="author_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Date" value={<DateField source="date" />} />
        <Labeled label="Event Id" value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Latitude" value={<NumberField source="latitude" />} />
        <Labeled label="Longitude" value={<NumberField source="longitude" />} />
        <Labeled label="Photos" value={<TextField source="photos" />} />
        <Labeled label="Participants" value={<TextField source="participants" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
