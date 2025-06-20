import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ContactFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ContactList = () => (
  <List filters={ContactFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="description" label="Description" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="dear" label="Dear" />
      <ReferenceField source="salutation_type_id" reference="contact_salutation_type" label="Salutation Type Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="gender_id" reference="gender" label="Gender Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="type_id" reference="contact_type" label="Type Id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="birth_date" label="Birth Date" />
      <TextField source="phone" label="Phone" />
      <TextField source="mobile_phone" label="Mobile Phone" />
      <TextField source="home_phone" label="Home Phone" />
      <TextField source="skype" label="Skype" />
      <TextField source="email" label="Email" />
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
      <BooleanField source="do_not_use_email" label="Do Not Use Email" />
      <BooleanField source="do_not_use_call" label="Do Not Use Call" />
      <BooleanField source="do_not_use_fax" label="Do Not Use Fax" />
      <BooleanField source="do_not_use_sms" label="Do Not Use Sms" />
      <BooleanField source="do_not_use_mail" label="Do Not Use Mail" />
      <TextField source="notes" label="Notes" />
      <TextField source="facebook" label="Facebook" />
      <TextField source="linked_in" label="Linked In" />
      <TextField source="twitter" label="Twitter" />
      <TextField source="facebook_id" label="Facebook Id" />
      <TextField source="linked_in_id" label="Linked In Id" />
      <TextField source="twitter_id" label="Twitter Id" />
      <TextField source="contact_photo" label="Contact Photo" />
      <TextField source="gpsn" label="Gpsn" />
      <TextField source="gpse" label="Gpse" />
      <TextField source="surname" label="Surname" />
      <TextField source="given_name" label="Given Name" />
      <TextField source="middle_name" label="Middle Name" />
      <BooleanField source="confirmed" label="Confirmed" />
      <ReferenceField source="language_id" reference="sys_language" label="Language Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="completeness" label="Completeness" />
      <BooleanField source="is_non_actual_email" label="Is Non Actual Email" />
      <NumberField source="r_id" label="R Id" />
      <NumberField source="age" label="Age" />
      <BooleanField source="ti_is_invoice_by_sms" label="Ti Is Invoice By Sms" />
      <BooleanField source="ti_is_invoice_by_email" label="Ti Is Invoice By Email" />
      <TextField source="alternate_names" label="Alternate Names" />
      <TextField source="duplicate_group_id" label="Duplicate Group Id" />
      <BooleanField source="is_email_confirmed" label="Is Email Confirmed" />
      <TextField source="url" label="Url" />
      <ReferenceField source="verified_stage_id" reference="verified_stage" label="Verified Stage Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="duplicate_id" label="Duplicate Id" />
      <TextField source="avatar_url" label="Avatar Url" />
      <ReferenceField source="verification_status_id" reference="verification_status" label="Verification Status Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="measurements" label="Measurements" />
    </Datagrid>
  </List>
);
