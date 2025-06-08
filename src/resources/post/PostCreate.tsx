import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PostCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <DateInput source="publication_date"  />
          <ReferenceInput source="type_id" reference="post_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="state_id" reference="post_state">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="text"  />
          <TextInput source="url"  />
          <ReferenceInput source="master_post_id" reference="post">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="is_moment"  />
          <TextInput source="author_id"  />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="date"  />
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="latitude"  />
          <NumberInput source="longitude"  />
          <TextInput source="photos"  />
          <TextInput source="participants"  />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
