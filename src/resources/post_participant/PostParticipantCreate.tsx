import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PostParticipantCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="post_id" validate={[]} />
          <ReferenceInput source="role_id" reference="post_participant_role">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="record_id" validate={[]} />
          <TextInput source="entity_name" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="hide_time_line" validate={[]} />
          <TextInput source="record_url" validate={[]} />
          <TextInput source="record_name" validate={[]} />
      </>
    }
  />
);
