import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ContactCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="owner_id" reference="contact">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="dear"  />
          <ReferenceInput source="salutation_type_id" reference="contact_salutation_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="gender_id" reference="gender">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="decision_role_id" reference="contact_decision_role">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="contact_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="job_id" reference="job">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="job_title"  />
          <ReferenceInput source="department_id" reference="department">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <DateInput source="birth_date"  />
          <TextInput source="phone"  />
          <TextInput source="mobile_phone"  />
          <TextInput source="home_phone"  />
          <TextInput source="skype"  />
          <TextInput source="email"  />
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
          <BooleanInput source="do_not_use_email"  />
          <BooleanInput source="do_not_use_call"  />
          <BooleanInput source="do_not_use_fax"  />
          <BooleanInput source="do_not_use_sms"  />
          <BooleanInput source="do_not_use_mail"  />
          <TextInput source="notes"  />
          <TextInput source="facebook"  />
          <TextInput source="linked_in"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="twitter"  />
          <TextInput source="facebook_id"  />
          <TextInput source="linked_in_id"  />
          <TextInput source="twitter_id"  />
          <TextInput source="contact_photo"  />
          <TextInput source="gpsn"  />
          <TextInput source="gpse"  />
          <TextInput source="surname"  />
          <TextInput source="given_name"  />
          <TextInput source="middle_name"  />
          <BooleanInput source="confirmed"  />
          <ReferenceInput source="language_id" reference="sys_language">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="completeness"  />
          <BooleanInput source="is_non_actual_email"  />
          <NumberInput source="r_id"  />
          <NumberInput source="age"  />
          <BooleanInput source="ti_is_invoice_by_sms"  />
          <BooleanInput source="ti_is_invoice_by_email"  />
          <TextInput source="alternate_names"  />
          <TextInput source="duplicate_group_id"  />
          <BooleanInput source="is_email_confirmed"  />
          <TextInput source="url"  />
          <ReferenceInput source="verified_stage_id" reference="verified_stage">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="duplicate_id"  />
          <TextInput source="avatar_url"  />
          <ReferenceInput source="promote_breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="verification_status_id" reference="verification_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="rating"  />
          <NumberInput source="lead_conversion_score"  />
      </>
    }
  />
);
