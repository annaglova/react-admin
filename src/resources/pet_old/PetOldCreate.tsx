import { BooleanInput, DateInput, NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const PetOldCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <DateInput source="date_of_birth" validate={[]} />
          <TextInput source="owner_id" validate={[]} />
          <TextInput source="kennel_id" validate={[]} />
          <TextInput source="pet_type_id" validate={[]} />
          <TextInput source="sex_id" validate={[]} />
          <TextInput source="father_id" validate={[]} />
          <TextInput source="mother_id" validate={[]} />
          <TextInput source="breed_id" validate={[]} />
          <TextInput source="breeder_id" validate={[]} />
          <TextInput source="photo_id" validate={[]} />
          <DateInput source="date_of_death" validate={[]} />
          <TextInput source="pet_status_id" validate={[]} />
          <TextInput source="coat_type_id" validate={[]} />
          <TextInput source="coat_color_id" validate={[]} />
          <TextInput source="size_id" validate={[]} />
          <TextInput source="body_feature_id" validate={[]} />
          <TextInput source="litter_id" validate={[]} />
          <TextInput source="call_name" validate={[]} />
          <TextInput source="country_of_birth_id" validate={[]} />
          <TextInput source="titles" validate={[]} />
          <NumberInput source="inbreeding_percent" validate={[]} />
          <TextInput source="url" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="page_template_code" validate={[]} />
          <TextInput source="verified_stage_id" validate={[]} />
          <TextInput source="owner_kennel_id" validate={[]} />
          <TextInput source="full_breed_name" validate={[]} />
          <TextInput source="avatar_url" validate={[]} />
          <NumberInput source="rating" validate={[]} />
          <TextInput source="breed_division_id" validate={[]} />
          <TextInput source="trim_titles" validate={[]} />
          <TextInput source="country_of_stay_id" validate={[]} />
          <NumberInput source="child_rating" validate={[]} />
          <NumberInput source="self_rating" validate={[]} />
          <DateInput source="calc_date_of_birth" validate={[]} />
          <NumberInput source="coi" validate={[]} />
          <TextInput source="verification_status_id" validate={[]} />
          <NumberInput source="rating_placement_in_breed" validate={[]} />
          <BooleanInput source="is_public" validate={[]} />
          <TextInput source="cover_id" validate={[]} />
          <TextInput source="public_data_id" validate={[]} />
          <NumberInput source="weight" validate={[]} />
          <NumberInput source="test_int_index" validate={[]} />
          <TextInput source="mother_breed_id" validate={[]} />
          <TextInput source="father_breed_id" validate={[]} />
      </>
    }
  />
);
