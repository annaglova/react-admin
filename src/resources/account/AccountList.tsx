import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const AccountFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const AccountList = () => (
  <List filters={AccountFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="ownership_id" reference="account_ownership" label="Ownership Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="primary_contact_id" label="Primary Contact Id" />
      <ReferenceField source="parent_id" reference="account" label="Parent Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="industry_id" reference="account_industry" label="Industry Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" label="Code" />
      <ReferenceField source="type_id" reference="account_type" label="Type Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="phone" label="Phone" />
      <TextField source="additional_phone" label="Additional Phone" />
      <TextField source="fax" label="Fax" />
      <TextField source="web" label="Web" />
      <ReferenceField source="address_type_id" reference="address_type" label="Address Type Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="address" label="Address" />
      <ReferenceField source="city_id" reference="city" label="City Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="region_id" reference="region" label="Region Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="zip" label="Zip" />
      <ReferenceField source="country_id" reference="country" label="Country Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="account_category_id" reference="account_category" label="Account Category Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="notes" label="Notes" />
      <TextField source="logo" label="Logo" />
      <TextField source="alternative_name" label="Alternative Name" />
      <TextField source="gpsn" label="Gpsn" />
      <TextField source="gpse" label="Gpse" />
      <NumberField source="completeness" label="Completeness" />
      <TextField source="aum" label="Aum" />
      <TextField source="trim_code" label="Trim Code" />
      <ReferenceField source="status_id" reference="account_status" label="Status Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="affix_type_id" reference="affix_type" label="Affix Type Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="federation_id" reference="account" label="Federation Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="about_us" label="About Us" />
      <TextField source="url" label="Url" />
      <TextField source="duplicate_group_id" label="Duplicate Group Id" />
      <ReferenceField source="verified_stage_id" reference="verified_stage" label="Verified Stage Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="duplicate_id" label="Duplicate Id" />
      <TextField source="avatar_url" label="Avatar Url" />
      <BooleanField source="has_kennel_name" label="Has Kennel Name" />
      <NumberField source="rating" label="Rating" />
      <DateField source="since" label="Since" />
      <BooleanField source="verfied" label="Verfied" />
      <BooleanField source="verified" label="Verified" />
      <ReferenceField source="verification_status_id" reference="verification_status" label="Verification Status Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="company_foundation_date" label="Company Foundation Date" />
      <NumberField source="rating_placement_in_breed" label="Rating Placement In Breed" />
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="lead_conversion_score" label="Lead Conversion Score" />
    </Datagrid>
  </List>
);
