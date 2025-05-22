import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";

const PetFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const PetList = () => (
  <List filters={PetFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <DateField source="notes" />
      <DateField source="date_of_birth" />
      <ReferenceField source="owner_id" reference="owners" />
      <ReferenceField source="kennel_id" reference="kennels" />
      <ReferenceField source="pet_type_id" reference="pet_types" />
      <ReferenceField source="sex_id" reference="sexes" />
      <ReferenceField source="father_id" reference="fathers" />
      <ReferenceField source="mother_id" reference="mothers" />
      <ReferenceField source="breed_id" reference="breeds" />
      <ReferenceField source="breeder_id" reference="breeders" />
      <ReferenceField source="photo_id" reference="photos" />
      <TextField source="date_of_death" />
      <ReferenceField source="pet_status_id" reference="pet_statuses" />
      <ReferenceField source="coat_type_id" reference="coat_types" />
      <ReferenceField source="coat_color_id" reference="coat_colors" />
      <ReferenceField source="size_id" reference="sizes" />
      <ReferenceField source="body_feature_id" reference="body_features" />
      <ReferenceField source="litter_id" reference="litter" />
      <DateField source="call_name" />
      <ReferenceField
        source="country_of_birth_id"
        reference="country_of_births"
      />
      <TextField source="titles" />
      <DateField source="inbreeding_percent" />
      <UrlField source="url" />
      <DateField source="page_template_code" />
      <ReferenceField source="verified_stage_id" reference="verified_stages" />
      <ReferenceField source="owner_kennel_id" reference="owner_kennels" />
      <TextField source="full_breed_name" />
      <DateField source="avatar_url" />
      <DateField source="rating" />
      <ReferenceField source="breed_division_id" reference="breed_divisions" />
      <DateField source="trim_titles" />
      <ReferenceField
        source="country_of_stay_id"
        reference="country_of_stays"
      />
      <DateField source="child_rating" />
      <DateField source="self_rating" />
      <DateField source="calc_date_of_birth" />
      <NumberField source="coi" />
      <ReferenceField
        source="verification_status_id"
        reference="verification_statuses"
      />
      <NumberField source="rating_placement_in_breed" />
      <BooleanField source="is_public" />
      <ReferenceField source="cover_id" reference="covers" />
      <ReferenceField source="public_data_id" reference="public_data" />
      <DateField source="weight" />
      <DateField source="test_int_index" />
      <ReferenceField source="mother_breed_id" reference="mother_breeds" />
      <ReferenceField source="father_breed_id" reference="father_breeds" />
    </Datagrid>
  </List>
);
