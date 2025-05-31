import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <DateInput source="publication_date" />
      <ReferenceInput source="type_id" reference="post_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="state_id" reference="post_state">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="text" />
      <TextInput source="url" />
      <ReferenceInput source="master_post_id" reference="post">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="is_moment" />
      <TextInput source="author_id" />
      <TextInput source="name" />
      <DateInput source="date" />
      <ReferenceInput source="event_id" reference="event">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="latitude" />
      <NumberInput source="longitude" />
      <TextInput source="photos" />
      <TextInput source="participants" />
      <ReferenceInput source="cover_id" reference="cover">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
