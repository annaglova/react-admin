// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


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
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
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
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed"} target={"public_data_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <BooleanField source="differ_by_coat_color" />
              <BooleanField source="differ_by_coat_type" />
              <BooleanField source="differ_by_size" />
              <ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>
              <TextField source="authentic_name" />
              <BooleanField source="differ_by_body_feature" />
              <NumberField source="pet_profile_count" />
              <ReferenceField source="category_id" reference="breed_category"><TextField source="name" /></ReferenceField>
              <NumberField source="kennel_count" />
              <BooleanField source="has_related_breed" />
              <TextField source="admin_name" />
              <TextField source="url" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <NumberField source="patron_count" />
              <TextField source="avatar_url" />
              <NumberField source="rating" />
              <NumberField source="achievement_progress" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <NumberField source="payment_rating" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"public_data"} target={"redirect_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="hash_md5" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <TextField source="pet_id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" />
              <TextField source="model" />
              <TextField source="entity_name" />
              <BooleanField source="primary" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_titles_id" reference="title_in_pet"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_owner" />
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"country"} target={"public_data_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <TextField source="image" />
              <TextField source="billing_info" />
              <ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>
              <TextField source="code" />
              <TextField source="alternate_names" />
              <ReferenceField source="geo_names_time_zone_id" reference="geo_names_time_zone"><TextField source="name" /></ReferenceField>
              <TextField source="geo_names_country_code" />
              <TextField source="geo_names_id" />
              <NumberField source="dem" />
              <NumberField source="latitude" />
              <NumberField source="longitude" />
              <TextField source="alpha2_code" />
              <TextField source="url" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"pet_type"} target={"public_data_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <NumberField source="pet_profile_count" />
              <TextField source="url" />
              <NumberField source="organization_count" />
              <NumberField source="profile_count" />
              <NumberField source="patron_count" />
              <NumberField source="kennel_count" />
              <TextField source="avatar_url" />
              <NumberField source="event_count" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
