// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const PetShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Date Of Birth" value={<DateField source="date_of_birth" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Kennel Id" value={<TextField source="kennel_id" />} />
        <Labeled label="Pet Type Id" value={<TextField source="pet_type_id" />} />
        <Labeled label="Sex Id" value={<TextField source="sex_id" />} />
        <Labeled label="Father Id" value={<TextField source="father_id" />} />
        <Labeled label="Mother Id" value={<TextField source="mother_id" />} />
        <Labeled label="Breed Id" value={<TextField source="breed_id" />} />
        <Labeled label="Breeder Id" value={<TextField source="breeder_id" />} />
        <Labeled label="Photo Id" value={<TextField source="photo_id" />} />
        <Labeled label="Date Of Death" value={<DateField source="date_of_death" />} />
        <Labeled label="Pet Status Id" value={<TextField source="pet_status_id" />} />
        <Labeled label="Coat Type Id" value={<TextField source="coat_type_id" />} />
        <Labeled label="Coat Color Id" value={<TextField source="coat_color_id" />} />
        <Labeled label="Size Id" value={<TextField source="size_id" />} />
        <Labeled label="Body Feature Id" value={<TextField source="body_feature_id" />} />
        <Labeled label="Litter Id" value={<TextField source="litter_id" />} />
        <Labeled label="Call Name" value={<TextField source="call_name" />} />
        <Labeled label="Country Of Birth Id" value={<TextField source="country_of_birth_id" />} />
        <Labeled label="Titles" value={<TextField source="titles" />} />
        <Labeled label="Inbreeding Percent" value={<NumberField source="inbreeding_percent" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Page Template Code" value={<TextField source="page_template_code" />} />
        <Labeled label="Verified Stage Id" value={<TextField source="verified_stage_id" />} />
        <Labeled label="Owner Kennel Id" value={<TextField source="owner_kennel_id" />} />
        <Labeled label="Full Breed Name" value={<TextField source="full_breed_name" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Rating" value={<NumberField source="rating" />} />
        <Labeled label="Breed Division Id" value={<TextField source="breed_division_id" />} />
        <Labeled label="Trim Titles" value={<TextField source="trim_titles" />} />
        <Labeled label="Country Of Stay Id" value={<TextField source="country_of_stay_id" />} />
        <Labeled label="Child Rating" value={<NumberField source="child_rating" />} />
        <Labeled label="Self Rating" value={<NumberField source="self_rating" />} />
        <Labeled label="Calc Date Of Birth" value={<DateField source="calc_date_of_birth" />} />
        <Labeled label="Coi" value={<NumberField source="coi" />} />
        <Labeled label="Verification Status Id" value={<TextField source="verification_status_id" />} />
        <Labeled label="Rating Placement In Breed" value={<NumberField source="rating_placement_in_breed" />} />
        <Labeled label="Is Public" value={<BooleanField source="is_public" />} />
        <Labeled label="Cover Id" value={<TextField source="cover_id" />} />
        <Labeled label="Public Data Id" value={<TextField source="public_data_id" />} />
        <Labeled label="Weight" value={<NumberField source="weight" />} />
        <Labeled label="Test Int Index" value={<NumberField source="test_int_index" />} />
        <Labeled label="Mother Breed Id" value={<TextField source="mother_breed_id" />} />
        <Labeled label="Father Breed Id" value={<TextField source="father_breed_id" />} />
      </>
    }
    detailsConfigs={
      []
    }
  />
);
