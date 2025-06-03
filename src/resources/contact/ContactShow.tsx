// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
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
    detailsConfigs={
      [
      {
        label: "Contact",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"contact"} target={"owner_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="dear" />
              <ReferenceField source="salutation_type_id" reference="contact_salutation_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="gender_id" reference="gender"><TextField source="name" /></ReferenceField>
              <ReferenceField source="decision_role_id" reference="contact_decision_role"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="contact_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="job_id" reference="job"><TextField source="name" /></ReferenceField>
              <TextField source="job_title" />
              <ReferenceField source="department_id" reference="department"><TextField source="name" /></ReferenceField>
              <DateField source="birth_date" />
              <TextField source="phone" />
              <TextField source="mobile_phone" />
              <TextField source="home_phone" />
              <TextField source="skype" />
              <TextField source="email" />
              <ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>
              <TextField source="address" />
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <TextField source="zip" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
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
              <ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>
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
              <ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>
              <TextField source="duplicate_id" />
              <TextField source="avatar_url" />
              <ReferenceField source="promote_breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" />
              <NumberField source="lead_conversion_score" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"quest_user_data"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="quest_status_id" reference="quest_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="current_stage_id" reference="quest_stage"><TextField source="name" /></ReferenceField>
              <TextField source="data" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <DateField source="due_date" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"project"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_entry_type_id" reference="project_entry_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="project_type"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="status_id" reference="project_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <NumberField source="duration" />
              <DateField source="deadline" />
              <ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="parent_project_id" reference="project"><TextField source="name" /></ReferenceField>
              <NumberField source="actual_completion" />
              <BooleanField source="is_auto_calc_completion" />
              <NumberField source="plan_income" />
              <NumberField source="fact_income" />
              <NumberField source="income_dev" />
              <NumberField source="income_dev_perc" />
              <NumberField source="plan_external_cost" />
              <NumberField source="fact_external_cost" />
              <NumberField source="external_cost_dev" />
              <NumberField source="plan_external_dev_perc" />
              <NumberField source="plan_expense" />
              <NumberField source="fact_expense" />
              <NumberField source="expense_dev" />
              <NumberField source="expense_dev_perc" />
              <NumberField source="plan_internal_cost" />
              <NumberField source="fact_internal_cost" />
              <NumberField source="internal_cost_dev" />
              <NumberField source="plan_internal_dev_perc" />
              <NumberField source="plan_margin" />
              <NumberField source="plan_margin_perc" />
              <NumberField source="fact_margin" />
              <NumberField source="fact_margin_perc" />
              <NumberField source="margin_dev" />
              <NumberField source="margin_dev_perc" />
              <NumberField source="position" />
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="project_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <TextField source="url" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"service_pact"} target={"service_provider_contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="status_id" reference="service_pact_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <TextField source="owner_id" />
              <TextField source="number" />
              <ReferenceField source="service_provider_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="notes" />
              <ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>
              <ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post_feed"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="pet_id" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"relationship"} target={"contact_b_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="reverse_relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>
              <BooleanField source="active" />
              <TextField source="description" />
              <ReferenceField source="account_a_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_b_id" reference="account"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"collection_entity"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="record_id" />
              <ReferenceField source="collection_id" reference="collection"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"account_billing_info"} target={"account_manager_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <TextField source="billing_info" />
              <TextField source="legal_unit" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post_like"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="post_id" reference="post"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"comment"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="comment_knowledge_base" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"favorites"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"pet_rating"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <NumberField source="rating" />
              <TextField source="pet_id" />
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"post_comment"} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="post_id" reference="post"><TextField source="name" /></ReferenceField>
              <TextField source="text" />
              <DateField source="date" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"pet_in_project"} target={"handler_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              <NumberField source="number" />
              <ReferenceField source="class_id" reference="pet_class"><TextField source="name" /></ReferenceField>
              <TextField source="web_link" />
              <TextField source="result" />
              <TextField source="code" />
              <TextField source="judge_id" />
              <ReferenceField source="place_id" reference="place"><TextField source="name" /></ReferenceField>
              <ReferenceField source="qualification_id" reference="pet_qualification"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              <TextField source="temp_project_name" />
              <TextField source="pet_breed_id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "\"Like\"",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"\"like\""} target={"contact_id"} record={record} perPage={15}  pagination={<Pagination />}>
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
