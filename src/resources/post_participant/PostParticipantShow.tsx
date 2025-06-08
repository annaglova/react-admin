// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const PostParticipantShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Post Id" required={false} value={<TextField source="post_id" />} />
        <Labeled label="Role Id" required={false} value={<ReferenceField source="role_id" reference="post_participant_role"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Record Id" required={false} value={<TextField source="record_id" />} />
        <Labeled label="Entity Name" required={false} value={<TextField source="entity_name" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Hide Time Line" required={false} value={<BooleanField source="hide_time_line" />} />
        <Labeled label="Record Url" required={false} value={<TextField source="record_url" />} />
        <Labeled label="Record Name" required={false} value={<TextField source="record_name" />} />
      </>
    }
  />
);
