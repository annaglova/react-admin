import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes"  />
          <DateInput source="date_of_birth"  />
          <ReferenceInput source="owner_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="kennel_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="sex_id" reference="sex">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="father_id" reference="pet">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="mother_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="breeder_id"  />
          <TextInput source="photo_id"  />
          <DateInput source="date_of_death"  />
          <ReferenceInput source="pet_status_id" reference="pet_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="coat_type_id" reference="coat_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="coat_color_id" reference="coat_color">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="size_id" reference="pet_size">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="body_feature_id" reference="body_feature">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="litter_id" reference="litter">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="call_name"  />
          <ReferenceInput source="country_of_birth_id" reference="country">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="titles"  />
          <NumberInput source="inbreeding_percent"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="url"  />
          <TextInput source="page_template_code"  />
          <ReferenceInput source="verified_stage_id" reference="verified_stage">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="owner_kennel_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="full_breed_name"  />
          <TextInput source="avatar_url"  />
          <ReferenceInput source="breed_division_id" reference="breed_division">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="trim_titles"  />
          <ReferenceInput source="country_of_stay_id" reference="country">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="calc_date_of_birth"  />
          <NumberInput source="coi"  />
          <ReferenceInput source="verification_status_id" reference="verification_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="rating_placement_in_breed"  />
          <BooleanInput source="is_public"  />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="weight"  />
          <NumberInput source="test_int_index"  />
          <ReferenceInput source="mother_breed_id" reference="pet_manchester_terrier_toy">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="father_breed_id" reference="pet">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="measurements"  />
      </>
    }
  />
);
