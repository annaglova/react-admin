import { BooleanInput, ReferenceInput, SelectInput, TextInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PostParticipantEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="post_id"  />
          <ReferenceInput source="role_id" reference="post_participant_role">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="record_id"  />
          <TextInput source="entity_name"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="hide_time_line"  />
          <TextInput source="record_url"  />
          <TextInput source="record_name"  />
      </>
    }
  />
);
