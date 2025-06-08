import { BooleanInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PostInFeedEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="feed_id" reference="post_feed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="post_id" reference="post">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="hide"  />
      </>
    }
  />
);
