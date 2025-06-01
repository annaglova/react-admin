import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ContactFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ContactList = () => (
  <List filters={ContactFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="owner_id" reference="contact">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="dear" />
      <ReferenceField source="salutation_type_id" reference="contact_salutation_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="gender_id" reference="gender">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="decision_role_id" reference="contact_decision_role">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="type_id" reference="contact_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="job_id" reference="job">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="job_title" />
      <ReferenceField source="department_id" reference="department">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="birth_date" />
      <TextField source="phone" />
      <TextField source="mobile_phone" />
      <TextField source="home_phone" />
      <TextField source="skype" />
      <TextField source="email" />
      <ReferenceField source="address_type_id" reference="address_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="address" />
      <ReferenceField source="city_id" reference="city">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="region_id" reference="region">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="zip" />
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceField source="language_id" reference="sys_language">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceField source="verified_stage_id" reference="verified_stage">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="duplicate_id" />
      <TextField source="avatar_url" />
      <ReferenceField source="promote_breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="verification_status_id" reference="verification_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="rating" />
      <NumberField source="lead_conversion_score" />
    </Datagrid>
  </List>
);
