import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PublicDataCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="hash_md5" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="contact_id" validate={[]} />
          <TextInput source="pet_id" validate={[]} />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="record_id" validate={[]} />
          <TextInput source="model" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="entity_name" validate={[]} />
          <BooleanInput source="primary" validate={[]} />
          <ReferenceInput source="redirect_id" reference="public_data">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="pet_titles_id" reference="title_in_pet">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="has_owner" validate={[]} />
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
