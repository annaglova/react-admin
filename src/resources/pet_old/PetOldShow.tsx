// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, DateField, NumberField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";



export const PetOldShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Date Of Birth" required={false} value={<DateField source="date_of_birth" />} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Kennel Id" required={false} value={<TextField source="kennel_id" />} />
        <Labeled label="Pet Type Id" required={false} value={<TextField source="pet_type_id" />} />
        <Labeled label="Sex Id" required={false} value={<TextField source="sex_id" />} />
        <Labeled label="Father Id" required={false} value={<TextField source="father_id" />} />
        <Labeled label="Mother Id" required={false} value={<TextField source="mother_id" />} />
        <Labeled label="Breed Id" required={false} value={<TextField source="breed_id" />} />
        <Labeled label="Breeder Id" required={false} value={<TextField source="breeder_id" />} />
        <Labeled label="Photo Id" required={false} value={<TextField source="photo_id" />} />
        <Labeled label="Date Of Death" required={false} value={<DateField source="date_of_death" />} />
        <Labeled label="Pet Status Id" required={false} value={<TextField source="pet_status_id" />} />
        <Labeled label="Coat Type Id" required={false} value={<TextField source="coat_type_id" />} />
        <Labeled label="Coat Color Id" required={false} value={<TextField source="coat_color_id" />} />
        <Labeled label="Size Id" required={false} value={<TextField source="size_id" />} />
        <Labeled label="Body Feature Id" required={false} value={<TextField source="body_feature_id" />} />
        <Labeled label="Litter Id" required={false} value={<TextField source="litter_id" />} />
        <Labeled label="Call Name" required={false} value={<TextField source="call_name" />} />
        <Labeled label="Country Of Birth Id" required={false} value={<TextField source="country_of_birth_id" />} />
        <Labeled label="Titles" required={false} value={<TextField source="titles" />} />
        <Labeled label="Inbreeding Percent" required={false} value={<NumberField source="inbreeding_percent" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Page Template Code" required={false} value={<TextField source="page_template_code" />} />
        <Labeled label="Verified Stage Id" required={false} value={<TextField source="verified_stage_id" />} />
        <Labeled label="Owner Kennel Id" required={false} value={<TextField source="owner_kennel_id" />} />
        <Labeled label="Full Breed Name" required={false} value={<TextField source="full_breed_name" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
        <Labeled label="Breed Division Id" required={false} value={<TextField source="breed_division_id" />} />
        <Labeled label="Trim Titles" required={false} value={<TextField source="trim_titles" />} />
        <Labeled label="Country Of Stay Id" required={false} value={<TextField source="country_of_stay_id" />} />
        <Labeled label="Child Rating" required={false} value={<NumberField source="child_rating" />} />
        <Labeled label="Self Rating" required={false} value={<NumberField source="self_rating" />} />
        <Labeled label="Calc Date Of Birth" required={false} value={<DateField source="calc_date_of_birth" />} />
        <Labeled label="Coi" required={false} value={<NumberField source="coi" />} />
        <Labeled label="Verification Status Id" required={false} value={<TextField source="verification_status_id" />} />
        <Labeled label="Rating Placement In Breed" required={false} value={<NumberField source="rating_placement_in_breed" />} />
        <Labeled label="Is Public" required={false} value={<BooleanField source="is_public" />} />
        <Labeled label="Cover Id" required={false} value={<TextField source="cover_id" />} />
        <Labeled label="Public Data Id" required={false} value={<TextField source="public_data_id" />} />
        <Labeled label="Weight" required={false} value={<NumberField source="weight" />} />
        <Labeled label="Test Int Index" required={false} value={<NumberField source="test_int_index" />} />
        <Labeled label="Mother Breed Id" required={false} value={<TextField source="mother_breed_id" />} />
        <Labeled label="Father Breed Id" required={false} value={<TextField source="father_breed_id" />} />
      </>
    }
  />
);
