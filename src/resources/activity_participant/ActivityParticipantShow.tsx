// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const ActivityParticipantShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Activity Id" required={false} value={<ReferenceField source="activity_id" reference="activity"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Participant Id" required={false} value={<TextField source="participant_id" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Read Mark" required={false} value={<BooleanField source="read_mark" />} />
        <Labeled label="Invite Participant" required={false} value={<BooleanField source="invite_participant" />} />
      </>
    }
  />
);
