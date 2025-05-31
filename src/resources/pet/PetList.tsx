import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const PetFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetList = () => (
  <List filters={PetFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <DateField source="date_of_birth" />
      <TextField source="owner_id" />
      <TextField source="kennel_id" />
      <TextField source="pet_type_id" />
      <TextField source="sex_id" />
      <TextField source="father_id" />
      <TextField source="mother_id" />
      <TextField source="breed_id" />
      <TextField source="breeder_id" />
      <TextField source="photo_id" />
      <DateField source="date_of_death" />
      <TextField source="pet_status_id" />
      <TextField source="coat_type_id" />
      <TextField source="coat_color_id" />
      <TextField source="size_id" />
      <TextField source="body_feature_id" />
      <TextField source="litter_id" />
      <TextField source="call_name" />
      <TextField source="country_of_birth_id" />
      <TextField source="titles" />
      <NumberField source="inbreeding_percent" />
      <TextField source="url" />
      <TextField source="page_template_code" />
      <TextField source="verified_stage_id" />
      <TextField source="owner_kennel_id" />
      <TextField source="full_breed_name" />
      <TextField source="avatar_url" />
      <NumberField source="rating" />
      <TextField source="breed_division_id" />
      <TextField source="trim_titles" />
      <TextField source="country_of_stay_id" />
      <NumberField source="child_rating" />
      <NumberField source="self_rating" />
      <DateField source="calc_date_of_birth" />
      <NumberField source="coi" />
      <TextField source="verification_status_id" />
      <NumberField source="rating_placement_in_breed" />
      <BooleanField source="is_public" />
      <TextField source="cover_id" />
      <TextField source="public_data_id" />
      <NumberField source="weight" />
      <NumberField source="test_int_index" />
      <TextField source="mother_breed_id" />
      <TextField source="father_breed_id" />
    </Datagrid>
  </List>
);
