// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const ContactShow = ({ record }: any) => (
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
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" required={false} value={<ReferenceField source="owner_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Dear" required={false} value={<TextField source="dear" />} />
        <Labeled label="Salutation Type Id" required={false} value={<ReferenceField source="salutation_type_id" reference="contact_salutation_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Gender Id" required={false} value={<ReferenceField source="gender_id" reference="gender"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Decision Role Id" required={false} value={<ReferenceField source="decision_role_id" reference="contact_decision_role"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="contact_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Job Id" required={false} value={<ReferenceField source="job_id" reference="job"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Job Title" required={false} value={<TextField source="job_title" />} />
        <Labeled label="Department Id" required={false} value={<ReferenceField source="department_id" reference="department"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Birth Date" required={false} value={<DateField source="birth_date" />} />
        <Labeled label="Phone" required={false} value={<TextField source="phone" />} />
        <Labeled label="Mobile Phone" required={false} value={<TextField source="mobile_phone" />} />
        <Labeled label="Home Phone" required={false} value={<TextField source="home_phone" />} />
        <Labeled label="Skype" required={false} value={<TextField source="skype" />} />
        <Labeled label="Email" required={false} value={<TextField source="email" />} />
        <Labeled label="Address Type Id" required={false} value={<ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" required={false} value={<TextField source="address" />} />
        <Labeled label="City Id" required={false} value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" required={false} value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Zip" required={false} value={<TextField source="zip" />} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Do Not Use Email" required={false} value={<BooleanField source="do_not_use_email" />} />
        <Labeled label="Do Not Use Call" required={false} value={<BooleanField source="do_not_use_call" />} />
        <Labeled label="Do Not Use Fax" required={false} value={<BooleanField source="do_not_use_fax" />} />
        <Labeled label="Do Not Use Sms" required={false} value={<BooleanField source="do_not_use_sms" />} />
        <Labeled label="Do Not Use Mail" required={false} value={<BooleanField source="do_not_use_mail" />} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Facebook" required={false} value={<TextField source="facebook" />} />
        <Labeled label="Linked In" required={false} value={<TextField source="linked_in" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Twitter" required={false} value={<TextField source="twitter" />} />
        <Labeled label="Facebook Id" required={false} value={<TextField source="facebook_id" />} />
        <Labeled label="Linked In Id" required={false} value={<TextField source="linked_in_id" />} />
        <Labeled label="Twitter Id" required={false} value={<TextField source="twitter_id" />} />
        <Labeled label="Contact Photo" required={false} value={<TextField source="contact_photo" />} />
        <Labeled label="Gpsn" required={false} value={<TextField source="gpsn" />} />
        <Labeled label="Gpse" required={false} value={<TextField source="gpse" />} />
        <Labeled label="Surname" required={false} value={<TextField source="surname" />} />
        <Labeled label="Given Name" required={false} value={<TextField source="given_name" />} />
        <Labeled label="Middle Name" required={false} value={<TextField source="middle_name" />} />
        <Labeled label="Confirmed" required={false} value={<BooleanField source="confirmed" />} />
        <Labeled label="Language Id" required={false} value={<ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Completeness" required={false} value={<NumberField source="completeness" />} />
        <Labeled label="Is Non Actual Email" required={false} value={<BooleanField source="is_non_actual_email" />} />
        <Labeled label="R Id" required={false} value={<NumberField source="r_id" />} />
        <Labeled label="Age" required={false} value={<NumberField source="age" />} />
        <Labeled label="Ti Is Invoice By Sms" required={false} value={<BooleanField source="ti_is_invoice_by_sms" />} />
        <Labeled label="Ti Is Invoice By Email" required={false} value={<BooleanField source="ti_is_invoice_by_email" />} />
        <Labeled label="Alternate Names" required={false} value={<TextField source="alternate_names" />} />
        <Labeled label="Duplicate Group Id" required={false} value={<TextField source="duplicate_group_id" />} />
        <Labeled label="Is Email Confirmed" required={false} value={<BooleanField source="is_email_confirmed" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Verified Stage Id" required={false} value={<ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Duplicate Id" required={false} value={<TextField source="duplicate_id" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Promote Breed Id" required={false} value={<ReferenceField source="promote_breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Verification Status Id" required={false} value={<ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
        <Labeled label="Lead Conversion Score" required={false} value={<NumberField source="lead_conversion_score" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Payment In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="payment_in_breed" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="payment_in_breed" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="amount" label="Amount" />
              <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Contact In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="contact_in_breed" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="contact_in_breed" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" label="Rating" />
              <NumberField source="place" label="Place" />
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
          <ChildCreateButton resource="contact" fkField="owner_id" />
        </div>
        <ReferenceManyField reference="contact" target="owner_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
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
    label: "Quest User Data",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="quest_user_data" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="quest_user_data" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="quest_status_id" reference="quest_status" label="Quest Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="current_stage_id" reference="quest_stage" label="Current Stage Id"><TextField source="name" /></ReferenceField>
              <TextField source="data" label="Data" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <DateField source="due_date" label="Due Date" />
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
          <ChildCreateButton resource="project" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="project" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
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
          <ChildCreateButton resource="service_pact" fkField="service_provider_contact_id" />
        </div>
        <ReferenceManyField reference="service_pact" target="service_provider_contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="status_id" reference="service_pact_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <TextField source="owner_id" label="Owner Id" />
              <TextField source="number" label="Number" />
              <ReferenceField source="service_provider_id" reference="account" label="Service Provider Id"><TextField source="name" /></ReferenceField>
              <TextField source="notes" label="Notes" />
              <ReferenceField source="calendar_id" reference="calendar" label="Calendar Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="provider_id" reference="account" label="Provider Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="product_id" reference="product" label="Product Id"><TextField source="name" /></ReferenceField>
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
          <ChildCreateButton resource="post_feed" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="post_feed" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="pet_id" label="Pet Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" label="Pet Breed Id" />
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
          <ChildCreateButton resource="relationship" fkField="contact_b_id" />
        </div>
        <ReferenceManyField reference="relationship" target="contact_b_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="relation_type_id" reference="relation_type" label="Relation Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="reverse_relation_type_id" reference="relation_type" label="Reverse Relation Type Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="active" label="Active" />
              <TextField source="description" label="Description" />
              <ReferenceField source="account_a_id" reference="account" label="Account A Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_b_id" reference="account" label="Account B Id"><TextField source="name" /></ReferenceField>
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
          <ChildCreateButton resource="collection_entity" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="collection_entity" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="collection_id" reference="collection" label="Collection Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
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
    label: "Account Billing Info",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="account_billing_info" fkField="account_manager_id" />
        </div>
        <ReferenceManyField reference="account_billing_info" target="account_manager_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="description" label="Description" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <TextField source="billing_info" label="Billing Info" />
              <TextField source="legal_unit" label="Legal Unit" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post Like",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="post_like" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="post_like" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="post_id" reference="post" label="Post Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Comment",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="comment" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="comment" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="comment_knowledge_base" label="Comment Knowledge Base" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Favorites",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="favorites" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="favorites" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Rating",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_rating" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="pet_rating" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="rating" label="Rating" />
              <TextField source="pet_id" label="Pet Id" />
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Post Comment",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="post_comment" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="post_comment" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="post_id" reference="post" label="Post Id"><TextField source="name" /></ReferenceField>
              <TextField source="text" label="Text" />
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet In Project",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_in_project" fkField="handler_id" />
        </div>
        <ReferenceManyField reference="pet_in_project" target="handler_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
              <NumberField source="number" label="Number" />
              <ReferenceField source="class_id" reference="pet_class" label="Class Id"><TextField source="name" /></ReferenceField>
              <TextField source="web_link" label="Web Link" />
              <TextField source="result" label="Result" />
              <TextField source="code" label="Code" />
              <TextField source="judge_id" label="Judge Id" />
              <ReferenceField source="place_id" reference="place" label="Place Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="qualification_id" reference="pet_qualification" label="Qualification Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
              <TextField source="temp_project_name" label="Temp Project Name" />
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Like",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="like" fkField="contact_id" />
        </div>
        <ReferenceManyField reference="like" target="contact_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
