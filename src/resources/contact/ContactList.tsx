import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const ContactFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ContactList = () => (
  <List filters={ContactFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="account_id" />
      <TextField source="owner_id" />
      <TextField source="dear" />
      <TextField source="salutation_type_id" />
      <TextField source="gender_id" />
      <TextField source="decision_role_id" />
      <TextField source="type_id" />
      <TextField source="job_id" />
      <TextField source="job_title" />
      <TextField source="department_id" />
      <DateField source="birth_date" />
      <TextField source="phone" />
      <TextField source="mobile_phone" />
      <TextField source="home_phone" />
      <TextField source="skype" />
      <TextField source="email" />
      <TextField source="address_type_id" />
      <TextField source="address" />
      <TextField source="city_id" />
      <TextField source="region_id" />
      <TextField source="zip" />
      <TextField source="country_id" />
      <BooleanField source="do_not_use_email" />
      <BooleanField source="do_not_use_call" />
      <BooleanField source="do_not_use_fax" />
      <BooleanField source="do_not_use_sms" />
      <BooleanField source="do_not_use_mail" />
      <TextField source="notes" />
      <TextField source="facebook" />
      <TextField source="linked_in" />
      <TextField source="twitter" />
      <TextField source="facebook_id" />
      <TextField source="linked_in_id" />
      <TextField source="twitter_id" />
      <TextField source="contact_photo" />
      <TextField source="gpsn" />
      <TextField source="gpse" />
      <TextField source="surname" />
      <TextField source="given_name" />
      <TextField source="middle_name" />
      <BooleanField source="confirmed" />
      <TextField source="language_id" />
      <NumberField source="completeness" />
      <BooleanField source="is_non_actual_email" />
      <NumberField source="r_id" />
      <NumberField source="age" />
      <BooleanField source="ti_is_invoice_by_sms" />
      <BooleanField source="ti_is_invoice_by_email" />
      <TextField source="alternate_names" />
      <TextField source="duplicate_group_id" />
      <BooleanField source="is_email_confirmed" />
      <TextField source="url" />
      <TextField source="verified_stage_id" />
      <TextField source="duplicate_id" />
      <TextField source="avatar_url" />
      <TextField source="promote_breed_id" />
      <TextField source="verification_status_id" />
      <TextField source="cover_id" />
      <NumberField source="rating" />
      <NumberField source="lead_conversion_score" />
    </Datagrid>
  </List>
);
