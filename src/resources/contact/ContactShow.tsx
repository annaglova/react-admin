// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const ContactShow = ({ record }: any) => (
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
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" value={<ReferenceField source="owner_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Dear" value={<TextField source="dear" />} />
        <Labeled label="Salutation Type Id" value={<ReferenceField source="salutation_type_id" reference="contact_salutation_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Gender Id" value={<ReferenceField source="gender_id" reference="gender"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Decision Role Id" value={<ReferenceField source="decision_role_id" reference="contact_decision_role"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="contact_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Job Id" value={<ReferenceField source="job_id" reference="job"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Job Title" value={<TextField source="job_title" />} />
        <Labeled label="Department Id" value={<ReferenceField source="department_id" reference="department"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Birth Date" value={<DateField source="birth_date" />} />
        <Labeled label="Phone" value={<TextField source="phone" />} />
        <Labeled label="Mobile Phone" value={<TextField source="mobile_phone" />} />
        <Labeled label="Home Phone" value={<TextField source="home_phone" />} />
        <Labeled label="Skype" value={<TextField source="skype" />} />
        <Labeled label="Email" value={<TextField source="email" />} />
        <Labeled label="Address Type Id" value={<ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" value={<TextField source="address" />} />
        <Labeled label="City Id" value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Zip" value={<TextField source="zip" />} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Do Not Use Email" value={<BooleanField source="do_not_use_email" />} />
        <Labeled label="Do Not Use Call" value={<BooleanField source="do_not_use_call" />} />
        <Labeled label="Do Not Use Fax" value={<BooleanField source="do_not_use_fax" />} />
        <Labeled label="Do Not Use Sms" value={<BooleanField source="do_not_use_sms" />} />
        <Labeled label="Do Not Use Mail" value={<BooleanField source="do_not_use_mail" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Facebook" value={<TextField source="facebook" />} />
        <Labeled label="Linked In" value={<TextField source="linked_in" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Twitter" value={<TextField source="twitter" />} />
        <Labeled label="Facebook Id" value={<TextField source="facebook_id" />} />
        <Labeled label="Linked In Id" value={<TextField source="linked_in_id" />} />
        <Labeled label="Twitter Id" value={<TextField source="twitter_id" />} />
        <Labeled label="Contact Photo" value={<TextField source="contact_photo" />} />
        <Labeled label="Gpsn" value={<TextField source="gpsn" />} />
        <Labeled label="Gpse" value={<TextField source="gpse" />} />
        <Labeled label="Surname" value={<TextField source="surname" />} />
        <Labeled label="Given Name" value={<TextField source="given_name" />} />
        <Labeled label="Middle Name" value={<TextField source="middle_name" />} />
        <Labeled label="Confirmed" value={<BooleanField source="confirmed" />} />
        <Labeled label="Language Id" value={<ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Completeness" value={<NumberField source="completeness" />} />
        <Labeled label="Is Non Actual Email" value={<BooleanField source="is_non_actual_email" />} />
        <Labeled label="R Id" value={<NumberField source="r_id" />} />
        <Labeled label="Age" value={<NumberField source="age" />} />
        <Labeled label="Ti Is Invoice By Sms" value={<BooleanField source="ti_is_invoice_by_sms" />} />
        <Labeled label="Ti Is Invoice By Email" value={<BooleanField source="ti_is_invoice_by_email" />} />
        <Labeled label="Alternate Names" value={<TextField source="alternate_names" />} />
        <Labeled label="Duplicate Group Id" value={<TextField source="duplicate_group_id" />} />
        <Labeled label="Is Email Confirmed" value={<BooleanField source="is_email_confirmed" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Verified Stage Id" value={<ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Duplicate Id" value={<TextField source="duplicate_id" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Promote Breed Id" value={<ReferenceField source="promote_breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Verification Status Id" value={<ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Rating" value={<NumberField source="rating" />} />
        <Labeled label="Lead Conversion Score" value={<NumberField source="lead_conversion_score" />} />
      </>
    }
  />
);
