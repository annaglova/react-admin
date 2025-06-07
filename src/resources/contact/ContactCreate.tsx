import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="owner_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="dear" validate={[]} />
          <ReferenceInput source="salutation_type_id" reference="contact_salutation_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="gender_id" reference="gender">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="decision_role_id" reference="contact_decision_role">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="contact_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="job_id" reference="job">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="job_title" validate={[]} />
          <ReferenceInput source="department_id" reference="department">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="birth_date" validate={[]} />
          <TextInput source="phone" validate={[]} />
          <TextInput source="mobile_phone" validate={[]} />
          <TextInput source="home_phone" validate={[]} />
          <TextInput source="skype" validate={[]} />
          <TextInput source="email" validate={[]} />
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
          <BooleanInput source="do_not_use_email" validate={[]} />
          <BooleanInput source="do_not_use_call" validate={[]} />
          <BooleanInput source="do_not_use_fax" validate={[]} />
          <BooleanInput source="do_not_use_sms" validate={[]} />
          <BooleanInput source="do_not_use_mail" validate={[]} />
          <TextInput source="notes" validate={[]} />
          <TextInput source="facebook" validate={[]} />
          <TextInput source="linked_in" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="twitter" validate={[]} />
          <TextInput source="facebook_id" validate={[]} />
          <TextInput source="linked_in_id" validate={[]} />
          <TextInput source="twitter_id" validate={[]} />
          <TextInput source="contact_photo" validate={[]} />
          <TextInput source="gpsn" validate={[]} />
          <TextInput source="gpse" validate={[]} />
          <TextInput source="surname" validate={[]} />
          <TextInput source="given_name" validate={[]} />
          <TextInput source="middle_name" validate={[]} />
          <BooleanInput source="confirmed" validate={[]} />
          <ReferenceInput source="language_id" reference="sys_language">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="completeness" validate={[]} />
          <BooleanInput source="is_non_actual_email" validate={[]} />
          <NumberInput source="r_id" validate={[]} />
          <NumberInput source="age" validate={[]} />
          <BooleanInput source="ti_is_invoice_by_sms" validate={[]} />
          <BooleanInput source="ti_is_invoice_by_email" validate={[]} />
          <TextInput source="alternate_names" validate={[]} />
          <TextInput source="duplicate_group_id" validate={[]} />
          <BooleanInput source="is_email_confirmed" validate={[]} />
          <TextInput source="url" validate={[]} />
          <ReferenceInput source="verified_stage_id" reference="verified_stage">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="duplicate_id" validate={[]} />
          <TextInput source="avatar_url" validate={[]} />
          <ReferenceInput source="promote_breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="verification_status_id" reference="verification_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="rating" validate={[]} />
          <NumberInput source="lead_conversion_score" validate={[]} />
      </>
    }
  />
);
