import { BooleanInput, Create, DateInput, NumberInput, SimpleForm, TextInput } from "react-admin";

export const PetCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="notes" />
      <DateInput source="date_of_birth" />
      <TextInput source="owner_id" />
      <TextInput source="kennel_id" />
      <TextInput source="pet_type_id" />
      <TextInput source="sex_id" />
      <TextInput source="father_id" />
      <TextInput source="mother_id" />
      <TextInput source="breed_id" />
      <TextInput source="breeder_id" />
      <TextInput source="photo_id" />
      <DateInput source="date_of_death" />
      <TextInput source="pet_status_id" />
      <TextInput source="coat_type_id" />
      <TextInput source="coat_color_id" />
      <TextInput source="size_id" />
      <TextInput source="body_feature_id" />
      <TextInput source="litter_id" />
      <TextInput source="call_name" />
      <TextInput source="country_of_birth_id" />
      <TextInput source="titles" />
      <NumberInput source="inbreeding_percent" />
      <TextInput source="url" />
      <TextInput source="page_template_code" />
      <TextInput source="verified_stage_id" />
      <TextInput source="owner_kennel_id" />
      <TextInput source="full_breed_name" />
      <TextInput source="avatar_url" />
      <NumberInput source="rating" />
      <TextInput source="breed_division_id" />
      <TextInput source="trim_titles" />
      <TextInput source="country_of_stay_id" />
      <NumberInput source="child_rating" />
      <NumberInput source="self_rating" />
      <DateInput source="calc_date_of_birth" />
      <NumberInput source="coi" />
      <TextInput source="verification_status_id" />
      <NumberInput source="rating_placement_in_breed" />
      <BooleanInput source="is_public" />
      <TextInput source="cover_id" />
      <TextInput source="public_data_id" />
      <NumberInput source="weight" />
      <NumberInput source="test_int_index" />
      <TextInput source="mother_breed_id" />
      <TextInput source="father_breed_id" />
    </SimpleForm>
  </Create>
);
