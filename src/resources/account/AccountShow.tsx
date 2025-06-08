// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const AccountShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Ownership Id" required={false} value={<ReferenceField source="ownership_id" reference="account_ownership"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Primary Contact Id" required={false} value={<TextField source="primary_contact_id" />} />
        <Labeled label="Parent Id" required={false} value={<ReferenceField source="parent_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Industry Id" required={false} value={<ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Code" required={false} value={<TextField source="code" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="account_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Phone" required={false} value={<TextField source="phone" />} />
        <Labeled label="Additional Phone" required={false} value={<TextField source="additional_phone" />} />
        <Labeled label="Fax" required={false} value={<TextField source="fax" />} />
        <Labeled label="Web" required={false} value={<TextField source="web" />} />
        <Labeled label="Address Type Id" required={false} value={<ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" required={false} value={<TextField source="address" />} />
        <Labeled label="City Id" required={false} value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" required={false} value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Zip" required={false} value={<TextField source="zip" />} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account Category Id" required={false} value={<ReferenceField source="account_category_id" reference="account_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Logo" required={false} value={<TextField source="logo" />} />
        <Labeled label="Alternative Name" required={false} value={<TextField source="alternative_name" />} />
        <Labeled label="Gpsn" required={false} value={<TextField source="gpsn" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Gpse" required={false} value={<TextField source="gpse" />} />
        <Labeled label="Completeness" required={false} value={<NumberField source="completeness" />} />
        <Labeled label="Aum" required={false} value={<TextField source="aum" />} />
        <Labeled label="Trim Code" required={false} value={<TextField source="trim_code" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="account_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Affix Type Id" required={false} value={<ReferenceField source="affix_type_id" reference="affix_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Federation Id" required={false} value={<ReferenceField source="federation_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="About Us" required={false} value={<TextField source="about_us" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Duplicate Group Id" required={false} value={<TextField source="duplicate_group_id" />} />
        <Labeled label="Verified Stage Id" required={false} value={<ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Duplicate Id" required={false} value={<TextField source="duplicate_id" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Has Kennel Name" required={false} value={<BooleanField source="has_kennel_name" />} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
        <Labeled label="Since" required={false} value={<DateField source="since" />} />
        <Labeled label="Verfied" required={false} value={<BooleanField source="verfied" />} />
        <Labeled label="Verified" required={false} value={<BooleanField source="verified" />} />
        <Labeled label="Verification Status Id" required={false} value={<ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Company Foundation Date" required={false} value={<DateField source="company_foundation_date" />} />
        <Labeled label="Rating Placement In Breed" required={false} value={<NumberField source="rating_placement_in_breed" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Lead Conversion Score" required={false} value={<NumberField source="lead_conversion_score" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="activity" fkField="account_id" />
        </div>
        <ReferenceManyField reference="activity" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="title" label="Title" />
              <DateField source="start_date" label="Start Date" />
              <DateField source="due_date" label="Due Date" />
              <ReferenceField source="priority_id" reference="activity_priority" label="Priority Id"><TextField source="name" /></ReferenceField>
              <TextField source="author_id" label="Author Id" />
              <BooleanField source="remind_to_author" label="Remind To Author" />
              <DateField source="remind_to_author_date" label="Remind To Author Date" />
              <TextField source="owner_id" label="Owner Id" />
              <BooleanField source="remind_to_owner" label="Remind To Owner" />
              <DateField source="remind_to_owner_date" label="Remind To Owner Date" />
              <ReferenceField source="type_id" reference="activity_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="activity_category_id" reference="activity_category" label="Activity Category Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="show_in_scheduler" label="Show In Scheduler" />
              <ReferenceField source="status_id" reference="activity_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="result_id" reference="activity_result" label="Result Id"><TextField source="name" /></ReferenceField>
              <TextField source="detailed_result" label="Detailed Result" />
              <ReferenceField source="time_zone_id" reference="time_zone" label="Time Zone Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <TextField source="sender" label="Sender" />
              <TextField source="recepient" label="Recepient" />
              <TextField source="copy_recepient" label="Copy Recepient" />
              <TextField source="blind_copy_recepient" label="Blind Copy Recepient" />
              <TextField source="body" label="Body" />
              <TextField source="notes" label="Notes" />
              <TextField source="color" label="Color" />
              <DateField source="send_date" label="Send Date" />
              <NumberField source="duration_in_minutes" label="Duration In Minutes" />
              <TextField source="error_on_send" label="Error On Send" />
              <TextField source="duration_in_mnutes_and_hours" label="Duration In Mnutes And Hours" />
              <TextField source="allowed_result" label="Allowed Result" />
              <BooleanField source="created_by_inv_crm" label="Created By Inv Crm" />
              <BooleanField source="is_html_body" label="Is Html Body" />
              <TextField source="mail_hash" label="Mail Hash" />
              <TextField source="process_element_id" label="Process Element Id" />
              <TextField source="global_activity_id" label="Global Activity Id" />
              <BooleanField source="is_need_process" label="Is Need Process" />
              <ReferenceField source="activity_connection_id" reference="activity" label="Activity Connection Id"><TextField source="name" /></ReferenceField>
              <TextField source="organizer_id" label="Organizer Id" />
              <TextField source="header_properties" label="Header Properties" />
              <BooleanField source="is_auto_submitted" label="Is Auto Submitted" />
              <TextField source="sender_contact_id" label="Sender Contact Id" />
              <TextField source="preview" label="Preview" />
              <TextField source="user_email_address" label="User Email Address" />
              <TextField source="location" label="Location" />
              <TextField source="enrich_status" label="Enrich Status" />
              <BooleanField source="service_processed" label="Service Processed" />
              <BooleanField source="is_not_published" label="Is Not Published" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="queue_item_id" label="Queue Item Id" />
              <ReferenceField source="order_id" reference="order" label="Order Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="full_project_name" label="Full Project Name" />
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
              <BooleanField source="is_template" label="Is Template" />
              <TextField source="owner_role_id" label="Owner Role Id" />
              <DateField source="remote_created_on" label="Remote Created On" />
              <ReferenceField source="competition_backup_id" reference="competition_backup" label="Competition Backup Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="competition_id" reference="competition" label="Competition Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="issue_type_id" reference="issue_type" label="Issue Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="user_quest_id" reference="user_quest" label="User Quest Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Account",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="account" fkField="parent_id" />
        </div>
        <ReferenceManyField reference="account" target="parent_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="ownership_id" reference="account_ownership" label="Ownership Id"><TextField source="name" /></ReferenceField>
              <TextField source="primary_contact_id" label="Primary Contact Id" />
              <ReferenceField source="industry_id" reference="account_industry" label="Industry Id"><TextField source="name" /></ReferenceField>
              <TextField source="code" label="Code" />
              <ReferenceField source="type_id" reference="account_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="phone" label="Phone" />
              <TextField source="additional_phone" label="Additional Phone" />
              <TextField source="fax" label="Fax" />
              <TextField source="web" label="Web" />
              <ReferenceField source="address_type_id" reference="address_type" label="Address Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="address" label="Address" />
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <TextField source="zip" label="Zip" />
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_category_id" reference="account_category" label="Account Category Id"><TextField source="name" /></ReferenceField>
              <TextField source="notes" label="Notes" />
              <TextField source="logo" label="Logo" />
              <TextField source="alternative_name" label="Alternative Name" />
              <TextField source="gpsn" label="Gpsn" />
              <TextField source="gpse" label="Gpse" />
              <NumberField source="completeness" label="Completeness" />
              <TextField source="aum" label="Aum" />
              <TextField source="trim_code" label="Trim Code" />
              <ReferenceField source="status_id" reference="account_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="affix_type_id" reference="affix_type" label="Affix Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="about_us" label="About Us" />
              <TextField source="url" label="Url" />
              <TextField source="duplicate_group_id" label="Duplicate Group Id" />
              <ReferenceField source="verified_stage_id" reference="verified_stage" label="Verified Stage Id"><TextField source="name" /></ReferenceField>
              <TextField source="duplicate_id" label="Duplicate Id" />
              <TextField source="avatar_url" label="Avatar Url" />
              <BooleanField source="has_kennel_name" label="Has Kennel Name" />
              <NumberField source="rating" label="Rating" />
              <DateField source="since" label="Since" />
              <BooleanField source="verfied" label="Verfied" />
              <BooleanField source="verified" label="Verified" />
              <ReferenceField source="verification_status_id" reference="verification_status" label="Verification Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="company_foundation_date" label="Company Foundation Date" />
              <NumberField source="rating_placement_in_breed" label="Rating Placement In Breed" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <NumberField source="lead_conversion_score" label="Lead Conversion Score" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Contact",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="contact" fkField="account_id" />
        </div>
        <ReferenceManyField reference="contact" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <ReferenceField source="owner_id" reference="contact" label="Owner Id"><TextField source="name" /></ReferenceField>
              <TextField source="dear" label="Dear" />
              <ReferenceField source="salutation_type_id" reference="contact_salutation_type" label="Salutation Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="gender_id" reference="gender" label="Gender Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="decision_role_id" reference="contact_decision_role" label="Decision Role Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="contact_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="job_id" reference="job" label="Job Id"><TextField source="name" /></ReferenceField>
              <TextField source="job_title" label="Job Title" />
              <ReferenceField source="department_id" reference="department" label="Department Id"><TextField source="name" /></ReferenceField>
              <DateField source="birth_date" label="Birth Date" />
              <TextField source="phone" label="Phone" />
              <TextField source="mobile_phone" label="Mobile Phone" />
              <TextField source="home_phone" label="Home Phone" />
              <TextField source="skype" label="Skype" />
              <TextField source="email" label="Email" />
              <ReferenceField source="address_type_id" reference="address_type" label="Address Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="address" label="Address" />
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <TextField source="zip" label="Zip" />
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
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
              <ReferenceField source="language_id" reference="sys_language" label="Language Id"><TextField source="name" /></ReferenceField>
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
              <ReferenceField source="verified_stage_id" reference="verified_stage" label="Verified Stage Id"><TextField source="name" /></ReferenceField>
              <TextField source="duplicate_id" label="Duplicate Id" />
              <TextField source="avatar_url" label="Avatar Url" />
              <ReferenceField source="promote_breed_id" reference="breed" label="Promote Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="verification_status_id" reference="verification_status" label="Verification Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" label="Rating" />
              <NumberField source="lead_conversion_score" label="Lead Conversion Score" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Litter",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="litter" fkField="kennel_id" />
        </div>
        <ReferenceManyField reference="litter" target="kennel_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="notes" label="Notes" />
              <TextField source="father_id" label="Father Id" />
              <TextField source="mother_id" label="Mother Id" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="mating_period_id" reference="period" label="Mating Period Id"><TextField source="name" /></ReferenceField>
              <DateField source="date_of_birth" label="Date Of Birth" />
              <ReferenceField source="status_id" reference="litter_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" label="Breeder Id" />
              <TextField source="url" label="Url" />
              <ReferenceField source="letter_id" reference="letter" label="Letter Id"><TextField source="name" /></ReferenceField>
              <NumberField source="male_amount" label="Male Amount" />
              <NumberField source="female_amount" label="Female Amount" />
              <BooleanField source="is_public" label="Is Public" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Order",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="order" fkField="account_id" />
        </div>
        <ReferenceManyField reference="order" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Event",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="event" fkField="account_id" />
        </div>
        <ReferenceManyField reference="event" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <ReferenceField source="type_id" reference="event_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="status_id" reference="event_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <TextField source="goal" label="Goal" />
              <ReferenceField source="territory_id" reference="territory" label="Territory Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="industry_id" reference="account_industry" label="Industry Id"><TextField source="name" /></ReferenceField>
              <TextField source="actual_response" label="Actual Response" />
              <NumberField source="primary_budgeted_cost" label="Primary Budgeted Cost" />
              <NumberField source="primary_expected_revenue" label="Primary Expected Revenue" />
              <NumberField source="primary_actual_cost" label="Primary Actual Cost" />
              <NumberField source="primary_actual_revenue" label="Primary Actual Revenue" />
              <TextField source="notes" label="Notes" />
              <DateField source="last_actualize_date" label="Last Actualize Date" />
              <NumberField source="recipient_count" label="Recipient Count" />
              <TextField source="address" label="Address" />
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <TextField source="url" label="Url" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Project",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="project" fkField="account_id" />
        </div>
        <ReferenceManyField reference="project" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_entry_type_id" reference="project_entry_type" label="Project Entry Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="project_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="status_id" reference="project_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <NumberField source="duration" label="Duration" />
              <DateField source="deadline" label="Deadline" />
              <ReferenceField source="parent_project_id" reference="project" label="Parent Project Id"><TextField source="name" /></ReferenceField>
              <NumberField source="actual_completion" label="Actual Completion" />
              <BooleanField source="is_auto_calc_completion" label="Is Auto Calc Completion" />
              <NumberField source="plan_income" label="Plan Income" />
              <NumberField source="fact_income" label="Fact Income" />
              <NumberField source="income_dev" label="Income Dev" />
              <NumberField source="income_dev_perc" label="Income Dev Perc" />
              <NumberField source="plan_external_cost" label="Plan External Cost" />
              <NumberField source="fact_external_cost" label="Fact External Cost" />
              <NumberField source="external_cost_dev" label="External Cost Dev" />
              <NumberField source="plan_external_dev_perc" label="Plan External Dev Perc" />
              <NumberField source="plan_expense" label="Plan Expense" />
              <NumberField source="fact_expense" label="Fact Expense" />
              <NumberField source="expense_dev" label="Expense Dev" />
              <NumberField source="expense_dev_perc" label="Expense Dev Perc" />
              <NumberField source="plan_internal_cost" label="Plan Internal Cost" />
              <NumberField source="fact_internal_cost" label="Fact Internal Cost" />
              <NumberField source="internal_cost_dev" label="Internal Cost Dev" />
              <NumberField source="plan_internal_dev_perc" label="Plan Internal Dev Perc" />
              <NumberField source="plan_margin" label="Plan Margin" />
              <NumberField source="plan_margin_perc" label="Plan Margin Perc" />
              <NumberField source="fact_margin" label="Fact Margin" />
              <NumberField source="fact_margin_perc" label="Fact Margin Perc" />
              <NumberField source="margin_dev" label="Margin Dev" />
              <NumberField source="margin_dev_perc" label="Margin Dev Perc" />
              <NumberField source="position" label="Position" />
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="project_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="url" label="Url" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Service Pact",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="service_pact" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="service_pact" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="status_id" reference="service_pact_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <TextField source="owner_id" label="Owner Id" />
              <TextField source="number" label="Number" />
              <ReferenceField source="service_provider_contact_id" reference="contact" label="Service Provider Contact Id"><TextField source="name" /></ReferenceField>
              <TextField source="notes" label="Notes" />
              <ReferenceField source="calendar_id" reference="calendar" label="Calendar Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="product_id" reference="product" label="Product Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Service Item",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="service_item" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="service_item" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <NumberField source="reaction_time_value" label="Reaction Time Value" />
              <TextField source="reaction_time_unit_id" label="Reaction Time Unit Id" />
              <NumberField source="solution_time_value" label="Solution Time Value" />
              <TextField source="solution_time_unit_id" label="Solution Time Unit Id" />
              <TextField source="notes" label="Notes" />
              <TextField source="reaction_time" label="Reaction Time" />
              <TextField source="solution_time" label="Solution Time" />
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="calendar_id" reference="calendar" label="Calendar Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="service_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <NumberField source="sort_order" label="Sort Order" />
              <TextField source="description" label="Description" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="conf_item" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="type_id" reference="config_item_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="serial_number" label="Serial Number" />
              <TextField source="inventory_number" label="Inventory Number" />
              <ReferenceField source="status_id" reference="config_item_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="purchase_date" label="Purchase Date" />
              <DateField source="cancel_date" label="Cancel Date" />
              <DateField source="warranty_until" label="Warranty Until" />
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="parent_conf_item_id" reference="conf_item" label="Parent Conf Item Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="config_item_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <TextField source="notes" label="Notes" />
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <TextField source="street" label="Street" />
              <TextField source="address" label="Address" />
              <TextField source="business_process_id" label="Business Process Id" />
              <NumberField source="priority" label="Priority" />
              <TextField source="conf_item_image" label="Conf Item Image" />
              <TextField source="description" label="Description" />
              <ReferenceField source="parsing_status_id" reference="conf_item_parsing_status" label="Parsing Status Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="need_parse" label="Need Parse" />
              <ReferenceField source="confidence_level_id" reference="data_confidence_level" label="Confidence Level Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="data_quality_level_id" reference="data_quality_level" label="Data Quality Level Id"><TextField source="name" /></ReferenceField>
              <TextField source="prime_entity_name" label="Prime Entity Name" />
              <NumberField source="quest_reward" label="Quest Reward" />
              <TextField source="url" label="Url" />
              <TextField source="page_model" label="Page Model" />
              <NumberField source="quest_cycle_interval" label="Quest Cycle Interval" />
              <TextField source="quest_type_id" label="Quest Type Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post Feed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="post_feed" fkField="account_id" />
        </div>
        <ReferenceManyField reference="post_feed" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="pet_id" label="Pet Id" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed" fkField="account_id" />
        </div>
        <ReferenceManyField reference="breed" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="differ_by_coat_color" label="Differ By Coat Color" />
              <BooleanField source="differ_by_coat_type" label="Differ By Coat Type" />
              <BooleanField source="differ_by_size" label="Differ By Size" />
              <ReferenceField source="language_id" reference="sys_language" label="Language Id"><TextField source="name" /></ReferenceField>
              <TextField source="authentic_name" label="Authentic Name" />
              <BooleanField source="differ_by_body_feature" label="Differ By Body Feature" />
              <NumberField source="pet_profile_count" label="Pet Profile Count" />
              <ReferenceField source="category_id" reference="breed_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <NumberField source="kennel_count" label="Kennel Count" />
              <BooleanField source="has_related_breed" label="Has Related Breed" />
              <TextField source="admin_name" label="Admin Name" />
              <TextField source="url" label="Url" />
              <NumberField source="patron_count" label="Patron Count" />
              <TextField source="avatar_url" label="Avatar Url" />
              <NumberField source="rating" label="Rating" />
              <NumberField source="achievement_progress" label="Achievement Progress" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <NumberField source="payment_rating" label="Payment Rating" />
              <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Competition",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="competition" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="competition" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="parent_id" reference="competition" label="Parent Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="competition_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="template_id" reference="competition" label="Template Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="exists_qualification" label="Exists Qualification" />
              <BooleanField source="exists_place" label="Exists Place" />
              <BooleanField source="exists_award" label="Exists Award" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <NumberField source="order" label="Order" />
              <ReferenceField source="category_id" reference="competition_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Note",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="note" fkField="account_id" />
        </div>
        <ReferenceManyField reference="note" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <TextField source="pet_id" label="Pet Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup" label="Entity Schema Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Public Data",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="public_data" fkField="account_id" />
        </div>
        <ReferenceManyField reference="public_data" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="hash_md5" label="Hash Md5" />
              <TextField source="contact_id" label="Contact Id" />
              <TextField source="pet_id" label="Pet Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <TextField source="model" label="Model" />
              <TextField source="entity_name" label="Entity Name" />
              <BooleanField source="primary" label="Primary" />
              <ReferenceField source="redirect_id" reference="public_data" label="Redirect Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_titles_id" reference="title_in_pet" label="Pet Titles Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_owner" label="Has Owner" />
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Competition Backup",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="competition_backup" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="competition_backup" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="description" label="Description" />
              <BooleanField source="exists_award" label="Exists Award" />
              <BooleanField source="exists_place" label="Exists Place" />
              <BooleanField source="exists_qualification" label="Exists Qualification" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="competition_type" label="Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Invoice",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="invoice" fkField="account_id" />
        </div>
        <ReferenceManyField reference="invoice" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="number" label="Number" />
              <DateField source="start_date" label="Start Date" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <NumberField source="primary_payment_amount" label="Primary Payment Amount" />
              <ReferenceField source="payment_status_id" reference="invoice_payment_status" label="Payment Status Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="supplier_billing_info_id" reference="account_billing_info" label="Supplier Billing Info Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="remind_to_owner" label="Remind To Owner" />
              <DateField source="remind_to_owner_date" label="Remind To Owner Date" />
              <ReferenceField source="customer_billing_info_id" reference="account_billing_info" label="Customer Billing Info Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" label="Currency Rate" />
              <NumberField source="amount" label="Amount" />
              <DateField source="due_date" label="Due Date" />
              <NumberField source="payment_amount" label="Payment Amount" />
              <TextField source="notes" label="Notes" />
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="order_id" reference="order" label="Order Id"><TextField source="name" /></ReferenceField>
              <NumberField source="amount_without_tax" label="Amount Without Tax" />
              <NumberField source="primary_amount_without_tax" label="Primary Amount Without Tax" />
              <NumberField source="payment_amount_without_tax" label="Payment Amount Without Tax" />
              <NumberField source="primary_payment_amount_without_tax" label="Primary Payment Amount Without Tax" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="created_from_order" label="Created From Order" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Fin Account",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="fin_account" fkField="account_id" />
        </div>
        <ReferenceManyField reference="fin_account" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="amount" label="Amount" />
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed Standard Status",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_standard_status" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="breed_standard_status" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Contact Career",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="contact_career" fkField="account_id" />
        </div>
        <ReferenceManyField reference="contact_career" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="department_id" reference="department" label="Department Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="job_id" reference="job" label="Job Id"><TextField source="name" /></ReferenceField>
              <TextField source="job_title" label="Job Title" />
              <BooleanField source="primary" label="Primary" />
              <BooleanField source="current" label="Current" />
              <DateField source="start_date" label="Start Date" />
              <DateField source="due_date" label="Due Date" />
              <ReferenceField source="job_change_reason_id" reference="job_change_reason" label="Job Change Reason Id"><TextField source="name" /></ReferenceField>
              <TextField source="description" label="Description" />
              <ReferenceField source="decision_role_id" reference="contact_decision_role" label="Decision Role Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" label="Rating" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Cover In Account",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cover_in_account" fkField="account_id" />
        </div>
        <ReferenceManyField reference="cover_in_account" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <DateField source="setup_date" label="Setup Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Account Communication",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="account_communication" fkField="account_id" />
        </div>
        <ReferenceManyField reference="account_communication" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="number" label="Number" />
              <NumberField source="position" label="Position" />
              <TextField source="social_media_id" label="Social Media Id" />
              <TextField source="search_number" label="Search Number" />
              <BooleanField source="primary" label="Primary" />
              <BooleanField source="exists" label="Exists" />
              <BooleanField source="non_actual" label="Non Actual" />
              <DateField source="date_set_non_actual" label="Date Set Non Actual" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Qualification",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_qualification" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="pet_qualification" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <NumberField source="code" label="Code" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Account In Tag",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="account_in_tag" fkField="entity_id" />
        </div>
        <ReferenceManyField reference="account_in_tag" target="entity_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="tag_id" reference="account_tag" label="Tag Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Relationship",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="relationship" fkField="account_b_id" />
        </div>
        <ReferenceManyField reference="relationship" target="account_b_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="relation_type_id" reference="relation_type" label="Relation Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="reverse_relation_type_id" reference="relation_type" label="Reverse Relation Type Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="active" label="Active" />
              <TextField source="description" label="Description" />
              <ReferenceField source="contact_a_id" reference="contact" label="Contact A Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_b_id" reference="contact" label="Contact B Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Service In Account",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_service_in_account" fkField="account_id" />
        </div>
        <ReferenceManyField reference="pet_service_in_account" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <BooleanField source="active" label="Active" />
              <ReferenceField source="service_type_id" reference="pet_service_type" label="Service Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_service_status_id" reference="pet_service_status" label="Pet Service Status Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed In Kennel",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_in_kennel" fkField="account_id" />
        </div>
        <ReferenceManyField reference="breed_in_kennel" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_standard_id" reference="breed_standard" label="Breed Standard Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Collection Entity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="collection_entity" fkField="account_id" />
        </div>
        <ReferenceManyField reference="collection_entity" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="collection_id" reference="collection" label="Collection Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed Group",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_group" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="breed_group" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <NumberField source="code" label="Code" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Studbook",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="studbook" fkField="account_id" />
        </div>
        <ReferenceManyField reference="studbook" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <ReferenceField source="status_id" reference="studbook_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="studbook_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="alternate_names" label="Alternate Names" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Title",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="title" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="title" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_processed" label="Is Processed" />
              <NumberField source="rating" label="Rating" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Award",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="award" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="award" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="description" label="Description" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed In Account",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_in_account" fkField="account_id" />
        </div>
        <ReferenceManyField reference="breed_in_account" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="breed_standard_id" reference="breed_standard" label="Breed Standard Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <NumberField source="pet_count" label="Pet Count" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed Standard",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_standard" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="breed_standard" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <ReferenceField source="subsection_id" reference="breed_subsection" label="Subsection Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="section_id" reference="breed_section" label="Section Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="group_id" reference="breed_group" label="Group Id"><TextField source="name" /></ReferenceField>
              <TextField source="code" label="Code" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <DateField source="effective" label="Effective" />
              <DateField source="approved" label="Approved" />
              <TextField source="link" label="Link" />
              <BooleanField source="working_trial" label="Working Trial" />
              <ReferenceField source="status_id" reference="breed_standard_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_variable_divisions" label="Has Variable Divisions" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Account Address",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="account_address" fkField="account_id" />
        </div>
        <ReferenceManyField reference="account_address" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="address_type_id" reference="address_type" label="Address Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <TextField source="address" label="Address" />
              <TextField source="zip" label="Zip" />
              <BooleanField source="primary" label="Primary" />
              <TextField source="gpsn" label="Gpsn" />
              <TextField source="gpse" label="Gpse" />
              <TextField source="full_address" label="Full Address" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Account Billing Info",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="account_billing_info" fkField="account_id" />
        </div>
        <ReferenceManyField reference="account_billing_info" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="description" label="Description" />
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <TextField source="billing_info" label="Billing Info" />
              <ReferenceField source="account_manager_id" reference="contact" label="Account Manager Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="chief_accountant_id" reference="contact" label="Chief Accountant Id"><TextField source="name" /></ReferenceField>
              <TextField source="legal_unit" label="Legal Unit" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Class",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_class" fkField="provider_id" />
        </div>
        <ReferenceManyField reference="pet_class" target="provider_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <NumberField source="age_to" label="Age To" />
              <NumberField source="age_from" label="Age From" />
              <NumberField source="code" label="Code" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item Measurement",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_measurement" fkField="account_id" />
        </div>
        <ReferenceManyField reference="conf_item_measurement" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="value" label="Value" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Account Review",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="account_review" fkField="account_id" />
        </div>
        <ReferenceManyField reference="account_review" target="account_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="contact_id" label="Contact Id" />
              <NumberField source="rating" label="Rating" />
              <NumberField source="order_number" label="Order Number" />
              <TextField source="review" label="Review" />
              <TextField source="test" label="Test" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
