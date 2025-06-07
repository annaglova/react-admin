import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ActivityParticipantCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="activity_id" reference="activity">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="participant_id" validate={[]} />
          <TextInput source="description" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="read_mark" validate={[]} />
          <BooleanInput source="invite_participant" validate={[]} />
      </>
    }
  />
);
