import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PostCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <DateInput source="publication_date" validate={[]} />
          <ReferenceInput source="type_id" reference="post_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="state_id" reference="post_state">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="text" validate={[]} />
          <TextInput source="url" validate={[]} />
          <ReferenceInput source="master_post_id" reference="post">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="is_moment" validate={[]} />
          <TextInput source="author_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <DateInput source="date" validate={[]} />
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="latitude" validate={[]} />
          <NumberInput source="longitude" validate={[]} />
          <TextInput source="photos" validate={[]} />
          <TextInput source="participants" validate={[]} />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
