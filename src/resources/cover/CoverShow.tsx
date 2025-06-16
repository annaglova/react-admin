// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const CoverShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Redirect Url" required={false} value={<TextField source="redirect_url" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="cover_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Is Default" required={false} value={<BooleanField source="is_default" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Contact",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="contact" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="contact" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
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
              <NumberField source="rating" label="Rating" />
              <NumberField source="lead_conversion_score" label="Lead Conversion Score" />
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
          <ChildCreateButton resource="account" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="account" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="ownership_id" reference="account_ownership" label="Ownership Id"><TextField source="name" /></ReferenceField>
              <TextField source="primary_contact_id" label="Primary Contact Id" />
              <ReferenceField source="parent_id" reference="account" label="Parent Id"><TextField source="name" /></ReferenceField>
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
              <ReferenceField source="federation_id" reference="account" label="Federation Id"><TextField source="name" /></ReferenceField>
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
          <ChildCreateButton resource="litter" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="litter" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="kennel_id" reference="account" label="Kennel Id"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" label="Breeder Id" />
              <TextField source="url" label="Url" />
              <ReferenceField source="letter_id" reference="letter" label="Letter Id"><TextField source="name" /></ReferenceField>
              <NumberField source="male_amount" label="Male Amount" />
              <NumberField source="female_amount" label="Female Amount" />
              <BooleanField source="is_public" label="Is Public" />
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
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
          <ChildCreateButton resource="event" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="event" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="organizer_id" reference="account" label="Organizer Id"><TextField source="name" /></ReferenceField>
              <TextField source="address" label="Address" />
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="url" label="Url" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
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
          <ChildCreateButton resource="project" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="project" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_entry_type_id" reference="project_entry_type" label="Project Entry Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="project_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="status_id" reference="project_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <NumberField source="duration" label="Duration" />
              <DateField source="deadline" label="Deadline" />
              <ReferenceField source="supplier_id" reference="account" label="Supplier Id"><TextField source="name" /></ReferenceField>
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
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="post" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="post" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <DateField source="publication_date" label="Publication Date" />
              <ReferenceField source="type_id" reference="post_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="state_id" reference="post_state" label="State Id"><TextField source="name" /></ReferenceField>
              <TextField source="text" label="Text" />
              <TextField source="url" label="Url" />
              <ReferenceField source="master_post_id" reference="post" label="Master Post Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_moment" label="Is Moment" />
              <TextField source="author_id" label="Author Id" />
              <DateField source="date" label="Date" />
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <NumberField source="latitude" label="Latitude" />
              <NumberField source="longitude" label="Longitude" />
              <TextField source="photos" label="Photos" />
              <TextField source="participants" label="Participants" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Collection",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="collection" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="collection" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <BooleanField source="private" label="Private" />
              <TextField source="entity_name" label="Entity Name" />
              <BooleanField source="auto" label="Auto" />
              <ReferenceField source="type_id" reference="collection_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="avatar_url" label="Avatar Url" />
              <TextField source="url" label="Url" />
              <TextField source="notes" label="Notes" />
              <DateField source="update_date" label="Update Date" />
              <TextField source="owner_id" label="Owner Id" />
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
          <ChildCreateButton resource="breed" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="breed" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="differ_by_coat_color" label="Differ By Coat Color" />
              <BooleanField source="differ_by_coat_type" label="Differ By Coat Type" />
              <BooleanField source="differ_by_size" label="Differ By Size" />
              <ReferenceField source="language_id" reference="sys_language" label="Language Id"><TextField source="name" /></ReferenceField>
              <TextField source="authentic_name" label="Authentic Name" />
              <BooleanField source="differ_by_body_feature" label="Differ By Body Feature" />
              <ReferenceField source="category_id" reference="breed_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_related_breed" label="Has Related Breed" />
              <TextField source="admin_name" label="Admin Name" />
              <TextField source="url" label="Url" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="avatar_url" label="Avatar Url" />
              <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id"><TextField source="name" /></ReferenceField>
              <TextField source="measurements" label="Measurements" />
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
          <ChildCreateButton resource="note" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="note" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <TextField source="pet_id" label="Pet Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
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
    label: "Cover In Litter",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cover_in_litter" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="cover_in_litter" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <DateField source="setup_date" label="Setup Date" />
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
          <ChildCreateButton resource="cover_in_account" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="cover_in_account" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <DateField source="setup_date" label="Setup Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Cover In Contact",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cover_in_contact" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="cover_in_contact" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="contact_id" label="Contact Id" />
              <DateField source="setup_date" label="Setup Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Cover In Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cover_in_pet" fkField="cover_id" />
        </div>
        <ReferenceManyField reference="cover_in_pet" target="cover_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="pet_id" label="Pet Id" />
              <DateField source="setup_date" label="Setup Date" />
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
