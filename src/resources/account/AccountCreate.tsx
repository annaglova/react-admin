import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const AccountCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="ownership_id" reference="account_ownership">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="primary_contact_id" validate={[]} />
          <ReferenceInput source="parent_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="industry_id" reference="account_industry">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="code" validate={[]} />
          <ReferenceInput source="type_id" reference="account_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="phone" validate={[]} />
          <TextInput source="additional_phone" validate={[]} />
          <TextInput source="fax" validate={[]} />
          <TextInput source="web" validate={[]} />
          <ReferenceInput source="address_type_id" reference="address_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="address" validate={[]} />
          <ReferenceInput source="city_id" reference="city">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="region_id" reference="region">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="zip" validate={[]} />
          <ReferenceInput source="country_id" reference="country">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="account_category_id" reference="account_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="notes" validate={[]} />
          <TextInput source="logo" validate={[]} />
          <TextInput source="alternative_name" validate={[]} />
          <TextInput source="gpsn" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="gpse" validate={[]} />
          <NumberInput source="completeness" validate={[]} />
          <TextInput source="aum" validate={[]} />
          <TextInput source="trim_code" validate={[]} />
          <ReferenceInput source="status_id" reference="account_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="affix_type_id" reference="affix_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="federation_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="about_us" validate={[]} />
          <TextInput source="url" validate={[]} />
          <TextInput source="duplicate_group_id" validate={[]} />
          <ReferenceInput source="verified_stage_id" reference="verified_stage">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="duplicate_id" validate={[]} />
          <TextInput source="avatar_url" validate={[]} />
          <BooleanInput source="has_kennel_name" validate={[]} />
          <NumberInput source="rating" validate={[]} />
          <DateInput source="since" validate={[]} />
          <BooleanInput source="verfied" validate={[]} />
          <BooleanInput source="verified" validate={[]} />
          <ReferenceInput source="verification_status_id" reference="verification_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="company_foundation_date" validate={[]} />
          <NumberInput source="rating_placement_in_breed" validate={[]} />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="lead_conversion_score" validate={[]} />
      </>
    }
  />
);
