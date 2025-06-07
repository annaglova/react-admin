import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const BreedCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="differ_by_coat_color" validate={[]} />
          <BooleanInput source="differ_by_coat_type" validate={[]} />
          <BooleanInput source="differ_by_size" validate={[]} />
          <ReferenceInput source="language_id" reference="sys_language">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="authentic_name" validate={[]} />
          <BooleanInput source="differ_by_body_feature" validate={[]} />
          <NumberInput source="pet_profile_count" validate={[]} />
          <ReferenceInput source="category_id" reference="breed_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="kennel_count" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="has_related_breed" validate={[]} />
          <TextInput source="admin_name" validate={[]} />
          <TextInput source="url" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="patron_count" validate={[]} />
          <TextInput source="avatar_url" validate={[]} />
          <NumberInput source="rating" validate={[]} />
          <NumberInput source="achievement_progress" validate={[]} />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="payment_rating" validate={[]} />
          <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
