import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ActivityParticipantCreate = () => (
  <ResourceCreateLayout
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
