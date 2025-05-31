import { BooleanInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const BreedEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="notes" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="differ_by_coat_color" />
      <BooleanInput source="differ_by_coat_type" />
      <BooleanInput source="differ_by_size" />
      <ReferenceInput source="language_id" reference="sys_language">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="authentic_name" />
      <BooleanInput source="differ_by_body_feature" />
      <NumberInput source="pet_profile_count" />
      <ReferenceInput source="category_id" reference="breed_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="kennel_count" />
      <BooleanInput source="has_related_breed" />
      <TextInput source="admin_name" />
      <TextInput source="url" />
      <ReferenceInput source="account_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="patron_count" />
      <TextInput source="avatar_url" />
      <NumberInput source="rating" />
      <NumberInput source="achievement_progress" />
      <ReferenceInput source="cover_id" reference="cover">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="payment_rating" />
      <ReferenceInput source="public_data_id" reference="public_data">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
