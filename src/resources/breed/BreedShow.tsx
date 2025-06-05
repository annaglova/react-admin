// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const BreedShow = ({ record }: any) => (
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
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Differ By Coat Color" required={false} value={<BooleanField source="differ_by_coat_color" />} />
        <Labeled label="Differ By Coat Type" required={false} value={<BooleanField source="differ_by_coat_type" />} />
        <Labeled label="Differ By Size" required={false} value={<BooleanField source="differ_by_size" />} />
        <Labeled label="Language Id" required={false} value={<ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Authentic Name" required={false} value={<TextField source="authentic_name" />} />
        <Labeled label="Differ By Body Feature" required={false} value={<BooleanField source="differ_by_body_feature" />} />
        <Labeled label="Pet Profile Count" required={false} value={<NumberField source="pet_profile_count" />} />
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="breed_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Kennel Count" required={false} value={<NumberField source="kennel_count" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Has Related Breed" required={false} value={<BooleanField source="has_related_breed" />} />
        <Labeled label="Admin Name" required={false} value={<TextField source="admin_name" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Patron Count" required={false} value={<NumberField source="patron_count" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Rating" required={false} value={<NumberField source="rating" />} />
        <Labeled label="Achievement Progress" required={false} value={<NumberField source="achievement_progress" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Payment Rating" required={false} value={<NumberField source="payment_rating" />} />
        <Labeled label="Public Data Id" required={false} value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
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
            <ReferenceManyField reference={"contact"} target={"promote_breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="owner_id" reference="contact"><TextField source="name" /></ReferenceField>
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
        label: "Raw Data",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"raw_data"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="json" />
              <ReferenceField source="status_id" reference="raw_data_status"><TextField source="name" /></ReferenceField>
              <TextField source="log" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <TextField source="redirect_url" />
              <TextField source="record_id" />
              <TextField source="entity_name" />
              <TextField source="model" />
              <TextField source="hash_md5" />
              <TextField source="contact_id" />
              <TextField source="account_id" />
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "\"Order\"",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"\"order\""} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                
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
            <ReferenceManyField reference={"project"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
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
        label: "Competition",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"competition"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="parent_id" reference="competition"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="competition_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="template_id" reference="competition"><TextField source="name" /></ReferenceField>
              <BooleanField source="exists_qualification" />
              <BooleanField source="exists_place" />
              <BooleanField source="exists_award" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <NumberField source="order" />
              <ReferenceField source="category_id" reference="competition_category"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Cover",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"cover"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="redirect_url" />
              <TextField source="avatar_url" />
              <ReferenceField source="type_id" reference="cover_type"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <TextField source="url" />
              <BooleanField source="is_default" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"note"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="pet_id" />
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Top Pet In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"top_pet_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="pet_id" />
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"public_data"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="hash_md5" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <TextField source="pet_id" />
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" />
              <TextField source="model" />
              <TextField source="entity_name" />
              <BooleanField source="primary" />
              <ReferenceField source="redirect_id" reference="public_data"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_titles_id" reference="title_in_pet"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_owner" />
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"invoice"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="number" />
              <DateField source="start_date" />
              <NumberField source="primary_amount" />
              <NumberField source="primary_payment_amount" />
              <ReferenceField source="payment_status_id" reference="invoice_payment_status"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="supplier_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>
              <BooleanField source="remind_to_owner" />
              <DateField source="remind_to_owner_date" />
              <ReferenceField source="customer_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" />
              <NumberField source="amount" />
              <DateField source="due_date" />
              <NumberField source="payment_amount" />
              <TextField source="notes" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>
              <NumberField source="amount_without_tax" />
              <NumberField source="primary_amount_without_tax" />
              <NumberField source="payment_amount_without_tax" />
              <NumberField source="primary_payment_amount_without_tax" />
              <BooleanField source="created_from_order" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Breed Division",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed_division"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <BooleanField source="division_by_color" />
              <BooleanField source="is_main" />
              <BooleanField source="division_by_body_feature" />
              <BooleanField source="division_by_size" />
              <BooleanField source="division_by_coat_type" />
              <ReferenceField source="breed_standard_id" reference="breed_standard"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"contact_career"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="contact_id" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="department_id" reference="department"><TextField source="name" /></ReferenceField>
              <ReferenceField source="job_id" reference="job"><TextField source="name" /></ReferenceField>
              <TextField source="job_title" />
              <BooleanField source="primary" />
              <BooleanField source="current" />
              <DateField source="start_date" />
              <DateField source="due_date" />
              <ReferenceField source="job_change_reason_id" reference="job_change_reason"><TextField source="name" /></ReferenceField>
              <TextField source="description" />
              <ReferenceField source="decision_role_id" reference="contact_decision_role"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Related Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"related_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Breed Synonym",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed_synonym"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Body Feature In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"body_feature_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="body_feature_id" reference="body_feature"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Coat Type In Breed Division",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"coat_type_in_breed_division"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="coat_type_id" reference="coat_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_division_id" reference="breed_division"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Achievement In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"achievement_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="achievement_id" reference="achievement"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Pet Size In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"pet_size_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="pet_size_id" reference="pet_size"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Body Feature In Breed Division",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"body_feature_in_breed_division"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="body_feature_id" reference="body_feature"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_division_id" reference="breed_division"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Health Exam Object In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"health_exam_object_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="health_exam_object_id" reference="health_exam_object"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Coat Color In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"coat_color_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="coat_color_id" reference="coat_color"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Coat Color In Breed Division",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"coat_color_in_breed_division"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="breed_division_id" reference="breed_division"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_color_id" reference="coat_color"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Coat Type In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"coat_type_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="coat_type_id" reference="coat_type"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Breed Forecast",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed_forecast"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <NumberField source="value" />
              <ReferenceField source="period_id" reference="period"><TextField source="name" /></ReferenceField>
              <NumberField source="amount" />
              <NumberField source="primary_amount" />
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Pet Size In Breed Division",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"pet_size_in_breed_division"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="pet_size_id" reference="pet_size"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_division_id" reference="breed_division"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Measurement Type In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"measurement_type_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="measurement_type_id" reference="measurement_type"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed_in_kennel"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_standard_id" reference="breed_standard"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed_in_account"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="breed_standard_id" reference="breed_standard"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <NumberField source="pet_count" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed_standard"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="subsection_id" reference="breed_subsection"><TextField source="name" /></ReferenceField>
              <ReferenceField source="section_id" reference="breed_section"><TextField source="name" /></ReferenceField>
              <ReferenceField source="group_id" reference="breed_group"><TextField source="name" /></ReferenceField>
              <TextField source="code" />
              <ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>
              <DateField source="effective" />
              <DateField source="approved" />
              <TextField source="link" />
              <BooleanField source="working_trial" />
              <ReferenceField source="status_id" reference="breed_standard_status"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_variable_divisions" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"conf_item_measurement"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <NumberField source="value" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Payment In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"payment_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <NumberField source="amount" />
              <TextField source="contact_id" />
              <ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "User Settings",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"user_settings"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="contact_id" />
              <ReferenceField source="page_view_id" reference="page_view"><TextField source="name" /></ReferenceField>
              <ReferenceField source="size_unit_id" reference="unit"><TextField source="name" /></ReferenceField>
              <ReferenceField source="weight_unit_id" reference="unit"><TextField source="name" /></ReferenceField>
              <BooleanField source="anonymous_gift_sender" />
              <BooleanField source="welcome_stage_complete" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"contact_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="contact_id" />
              <NumberField source="rating" />
              <NumberField source="place" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Top Patron In Breed",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"top_patron_in_breed"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="contact_id" />
              <NumberField source="rating" />
              <NumberField source="place" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Breed In Contact",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"breed_in_contact"} target={"breed_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="breed_standard_id" reference="breed_standard"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
