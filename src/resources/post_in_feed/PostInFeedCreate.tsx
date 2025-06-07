import { BooleanInput, ReferenceInput, SelectInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PostInFeedCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="feed_id" reference="post_feed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="post_id" reference="post">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="hide" validate={[]} />
      </>
    }
  />
);
