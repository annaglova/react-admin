import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ActivityParticipantEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="activity_id" reference="activity">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="participant_id"  />
          <TextInput source="description"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="read_mark"  />
          <BooleanInput source="invite_participant"  />
      </>
    }
  />
);
