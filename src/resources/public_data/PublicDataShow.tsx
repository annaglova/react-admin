// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const PublicDataShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Hash Md5" required={false} value={<TextField source="hash_md5" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Pet Id" required={false} value={<ReferenceField source="pet_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" required={false} value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" required={false} value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Record Id" required={false} value={<TextField source="record_id" />} />
        <Labeled label="Model" required={false} value={<TextField source="model" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Entity Name" required={false} value={<TextField source="entity_name" />} />
        <Labeled label="Primary" required={false} value={<BooleanField source="primary" />} />
        <Labeled label="Redirect Id" required={false} value={<ReferenceField source="redirect_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Titles Id" required={false} value={<ReferenceField source="pet_titles_id" reference="title_in_pet"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Has Owner" required={false} value={<BooleanField source="has_owner" />} />
        <Labeled label="Pet Breed Id" required={false} value={<ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed" fkField="public_data_id" />
        </div>
        <ReferenceManyField reference="breed" target="public_data_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="differ_by_coat_color" label="Differ By Coat Color" />
              <BooleanField source="differ_by_coat_type" label="Differ By Coat Type" />
              <BooleanField source="differ_by_size" label="Differ By Size" />
              <ReferenceField source="language_id" reference="sys_language" label="Language Id"><TextField source="name" /></ReferenceField>
              <TextField source="authentic_name" label="Authentic Name" />
              <BooleanField source="differ_by_body_feature" label="Differ By Body Feature" />
              <ReferenceField source="category_id" reference="breed_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_related_breed" label="Has Related Breed" />
              <TextField source="admin_name" label="Admin Name" />
              <TextField source="url" label="Url" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="avatar_url" label="Avatar Url" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <PrettyJsonField source="measurements" label="Measurements" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Public Data",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="public_data" fkField="redirect_id" />
        </div>
        <ReferenceManyField reference="public_data" target="redirect_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="hash_md5" label="Hash Md5" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <TextField source="model" label="Model" />
              <TextField source="entity_name" label="Entity Name" />
              <BooleanField source="primary" label="Primary" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_titles_id" reference="title_in_pet" label="Pet Titles Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_owner" label="Has Owner" />
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Country",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="country" fkField="public_data_id" />
        </div>
        <ReferenceManyField reference="country" target="public_data_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <TextField source="image" label="Image" />
              <TextField source="billing_info" label="Billing Info" />
              <ReferenceField source="time_zone_id" reference="time_zone" label="Time Zone Id"><TextField source="name" /></ReferenceField>
              <TextField source="code" label="Code" />
              <TextField source="alternate_names" label="Alternate Names" />
              <ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone" label="Geo Names Time Zone Id"><TextField source="name" /></ReferenceField>
              <TextField source="geo_names_country_code" label="Geo Names Country Code" />
              <TextField source="geo_names_id" label="Geo Names Id" />
              <NumberField source="dem" label="Dem" />
              <NumberField source="latitude" label="Latitude" />
              <NumberField source="longitude" label="Longitude" />
              <TextField source="alpha2_code" label="Alpha2 Code" />
              <TextField source="url" label="Url" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Type",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_type" fkField="public_data_id" />
        </div>
        <ReferenceManyField reference="pet_type" target="public_data_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <TextField source="url" label="Url" />
              <TextField source="avatar_url" label="Avatar Url" />
              <PrettyJsonField source="measurements" label="Measurements" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet" fkField="public_data_id" />
        </div>
        <ReferenceManyField reference="pet" target="public_data_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <DateField source="date_of_birth" label="Date Of Birth" />
              <ReferenceField source="owner_id" reference="contact" label="Owner Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="kennel_id" reference="account" label="Kennel Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="sex_id" reference="sex" label="Sex Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="father_id" reference="pet" label="Father Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="mother_id" reference="pet_manchester_terrier_toy" label="Mother Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" label="Breeder Id" />
              <TextField source="photo_id" label="Photo Id" />
              <DateField source="date_of_death" label="Date Of Death" />
              <ReferenceField source="pet_status_id" reference="pet_status" label="Pet Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_type_id" reference="coat_type" label="Coat Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_color_id" reference="coat_color" label="Coat Color Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="size_id" reference="pet_size" label="Size Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="body_feature_id" reference="body_feature" label="Body Feature Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <TextField source="call_name" label="Call Name" />
              <ReferenceField source="country_of_birth_id" reference="country" label="Country Of Birth Id"><TextField source="name" /></ReferenceField>
              <TextField source="titles" label="Titles" />
              <NumberField source="inbreeding_percent" label="Inbreeding Percent" />
              <TextField source="url" label="Url" />
              <TextField source="page_template_code" label="Page Template Code" />
              <ReferenceField source="verified_stage_id" reference="verified_stage" label="Verified Stage Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="owner_kennel_id" reference="account" label="Owner Kennel Id"><TextField source="name" /></ReferenceField>
              <TextField source="full_breed_name" label="Full Breed Name" />
              <TextField source="avatar_url" label="Avatar Url" />
              <ReferenceField source="breed_division_id" reference="breed_division" label="Breed Division Id"><TextField source="name" /></ReferenceField>
              <TextField source="trim_titles" label="Trim Titles" />
              <ReferenceField source="country_of_stay_id" reference="country" label="Country Of Stay Id"><TextField source="name" /></ReferenceField>
              <DateField source="calc_date_of_birth" label="Calc Date Of Birth" />
              <NumberField source="coi" label="Coi" />
              <ReferenceField source="verification_status_id" reference="verification_status" label="Verification Status Id"><TextField source="name" /></ReferenceField>
              <NumberField source="rating_placement_in_breed" label="Rating Placement In Breed" />
              <BooleanField source="is_public" label="Is Public" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <NumberField source="weight" label="Weight" />
              <NumberField source="test_int_index" label="Test Int Index" />
              <ReferenceField source="mother_breed_id" reference="pet_manchester_terrier_toy" label="Mother Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="father_breed_id" reference="pet" label="Father Breed Id"><TextField source="name" /></ReferenceField>
              <PrettyJsonField source="measurements" label="Measurements" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
