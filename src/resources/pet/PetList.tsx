import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, TextField, TextInput } from "react-admin";

const PetFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetList = () => (
  <List filters={PetFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name" />
      <TextField source="notes" label="Notes" />
      <DateField source="date_of_birth" label="Date Of Birth" />
      <TextField source="owner_id" label="Owner Id" />
      <TextField source="kennel_id" label="Kennel Id" />
      <TextField source="pet_type_id" label="Pet Type Id" />
      <TextField source="sex_id" label="Sex Id" />
      <TextField source="father_id" label="Father Id" />
      <TextField source="mother_id" label="Mother Id" />
      <TextField source="breed_id" label="Breed Id" />
      <TextField source="breeder_id" label="Breeder Id" />
      <TextField source="photo_id" label="Photo Id" />
      <DateField source="date_of_death" label="Date Of Death" />
      <TextField source="pet_status_id" label="Pet Status Id" />
      <TextField source="coat_type_id" label="Coat Type Id" />
      <TextField source="coat_color_id" label="Coat Color Id" />
      <TextField source="size_id" label="Size Id" />
      <TextField source="body_feature_id" label="Body Feature Id" />
      <TextField source="litter_id" label="Litter Id" />
      <TextField source="call_name" label="Call Name" />
      <TextField source="country_of_birth_id" label="Country Of Birth Id" />
      <TextField source="titles" label="Titles" />
      <NumberField source="inbreeding_percent" label="Inbreeding Percent" />
      <TextField source="url" label="Url" />
      <TextField source="page_template_code" label="Page Template Code" />
      <TextField source="verified_stage_id" label="Verified Stage Id" />
      <TextField source="owner_kennel_id" label="Owner Kennel Id" />
      <TextField source="full_breed_name" label="Full Breed Name" />
      <TextField source="avatar_url" label="Avatar Url" />
      <NumberField source="rating" label="Rating" />
      <TextField source="breed_division_id" label="Breed Division Id" />
      <TextField source="trim_titles" label="Trim Titles" />
      <TextField source="country_of_stay_id" label="Country Of Stay Id" />
      <NumberField source="child_rating" label="Child Rating" />
      <NumberField source="self_rating" label="Self Rating" />
      <DateField source="calc_date_of_birth" label="Calc Date Of Birth" />
      <NumberField source="coi" label="Coi" />
      <TextField source="verification_status_id" label="Verification Status Id" />
      <NumberField source="rating_placement_in_breed" label="Rating Placement In Breed" />
      <BooleanField source="is_public" label="Is Public" />
      <TextField source="cover_id" label="Cover Id" />
      <TextField source="public_data_id" label="Public Data Id" />
      <NumberField source="weight" label="Weight" />
      <NumberField source="test_int_index" label="Test Int Index" />
      <TextField source="mother_breed_id" label="Mother Breed Id" />
      <TextField source="father_breed_id" label="Father Breed Id" />
    </Datagrid>
  </List>
);
