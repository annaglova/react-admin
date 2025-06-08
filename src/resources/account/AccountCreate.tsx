import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const AccountCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="owner_id"  />
          <ReferenceInput source="ownership_id" reference="account_ownership">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="primary_contact_id"  />
          <ReferenceInput source="parent_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="industry_id" reference="account_industry">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="code"  />
          <ReferenceInput source="type_id" reference="account_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="phone"  />
          <TextInput source="additional_phone"  />
          <TextInput source="fax"  />
          <TextInput source="web"  />
          <ReferenceInput source="address_type_id" reference="address_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="address"  />
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="zip"  />
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="account_category_id" reference="account_category">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="notes"  />
          <TextInput source="logo"  />
          <TextInput source="alternative_name"  />
          <TextInput source="gpsn"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="gpse"  />
          <NumberInput source="completeness"  />
          <TextInput source="aum"  />
          <TextInput source="trim_code"  />
          <ReferenceInput source="status_id" reference="account_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="affix_type_id" reference="affix_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="federation_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="about_us"  />
          <TextInput source="url"  />
          <TextInput source="duplicate_group_id"  />
          <ReferenceInput source="verified_stage_id" reference="verified_stage">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="duplicate_id"  />
          <TextInput source="avatar_url"  />
          <BooleanInput source="has_kennel_name"  />
          <NumberInput source="rating"  />
          <DateInput source="since"  />
          <BooleanInput source="verfied"  />
          <BooleanInput source="verified"  />
          <ReferenceInput source="verification_status_id" reference="verification_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="company_foundation_date"  />
          <NumberInput source="rating_placement_in_breed"  />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="lead_conversion_score"  />
      </>
    }
  />
);
