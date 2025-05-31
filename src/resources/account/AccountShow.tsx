// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const AccountShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Ownership Id" value={<ReferenceField source="ownership_id" reference="account_ownership"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Primary Contact Id" value={<TextField source="primary_contact_id" />} />
        <Labeled label="Parent Id" value={<ReferenceField source="parent_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Industry Id" value={<ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="account_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Phone" value={<TextField source="phone" />} />
        <Labeled label="Additional Phone" value={<TextField source="additional_phone" />} />
        <Labeled label="Fax" value={<TextField source="fax" />} />
        <Labeled label="Web" value={<TextField source="web" />} />
        <Labeled label="Address Type Id" value={<ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" value={<TextField source="address" />} />
        <Labeled label="City Id" value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Zip" value={<TextField source="zip" />} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account Category Id" value={<ReferenceField source="account_category_id" reference="account_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Logo" value={<TextField source="logo" />} />
        <Labeled label="Alternative Name" value={<TextField source="alternative_name" />} />
        <Labeled label="Gpsn" value={<TextField source="gpsn" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Gpse" value={<TextField source="gpse" />} />
        <Labeled label="Completeness" value={<NumberField source="completeness" />} />
        <Labeled label="Aum" value={<TextField source="aum" />} />
        <Labeled label="Trim Code" value={<TextField source="trim_code" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="account_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Affix Type Id" value={<ReferenceField source="affix_type_id" reference="affix_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Federation Id" value={<ReferenceField source="federation_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="About Us" value={<TextField source="about_us" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Duplicate Group Id" value={<TextField source="duplicate_group_id" />} />
        <Labeled label="Verified Stage Id" value={<ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Duplicate Id" value={<TextField source="duplicate_id" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Has Kennel Name" value={<BooleanField source="has_kennel_name" />} />
        <Labeled label="Rating" value={<NumberField source="rating" />} />
        <Labeled label="Since" value={<DateField source="since" />} />
        <Labeled label="Verfied" value={<BooleanField source="verfied" />} />
        <Labeled label="Verified" value={<BooleanField source="verified" />} />
        <Labeled label="Verification Status Id" value={<ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Company Foundation Date" value={<DateField source="company_foundation_date" />} />
        <Labeled label="Rating Placement In Breed" value={<NumberField source="rating_placement_in_breed" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Lead Conversion Score" value={<NumberField source="lead_conversion_score" />} />
      </>
    }
  />
);
