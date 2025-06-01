// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const AccountShow = ({ record }: any) => (
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
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Ownership Id" value={<ReferenceField source="ownership_id" reference="account_ownership"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Primary Contact Id" value={<TextField source="primary_contact_id" />} />
        <Labeled label="Parent Id" value={<ReferenceField source="parent_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Industry Id" value={<ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Code" value={<TextField source="code" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="account_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Phone" value={<TextField source="phone" />} />
        <Labeled label="Additional Phone" value={<TextField source="additional_phone" />} />
        <Labeled label="Fax" value={<TextField source="fax" />} />
        <Labeled label="Web" value={<TextField source="web" />} />
        <Labeled label="Address Type Id" value={<ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" value={<TextField source="address" />} />
        <Labeled label="City Id" value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Zip" value={<TextField source="zip" />} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account Category Id" value={<ReferenceField source="account_category_id" reference="account_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Logo" value={<TextField source="logo" />} />
        <Labeled label="Alternative Name" value={<TextField source="alternative_name" />} />
        <Labeled label="Gpsn" value={<TextField source="gpsn" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Gpse" value={<TextField source="gpse" />} />
        <Labeled label="Completeness" value={<NumberField source="completeness" />} />
        <Labeled label="Aum" value={<TextField source="aum" />} />
        <Labeled label="Trim Code" value={<TextField source="trim_code" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="account_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Affix Type Id" value={<ReferenceField source="affix_type_id" reference="affix_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Federation Id" value={<ReferenceField source="federation_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="About Us" value={<TextField source="about_us" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Duplicate Group Id" value={<TextField source="duplicate_group_id" />} />
        <Labeled label="Verified Stage Id" value={<ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Duplicate Id" value={<TextField source="duplicate_id" />} />
        <Labeled label="Avatar Url" value={<TextField source="avatar_url" />} />
        <Labeled label="Has Kennel Name" value={<BooleanField source="has_kennel_name" />} />
        <Labeled label="Rating" value={<NumberField source="rating" />} />
        <Labeled label="Since" value={<DateField source="since" />} />
        <Labeled label="Verfied" value={<BooleanField source="verfied" />} />
        <Labeled label="Verified" value={<BooleanField source="verified" />} />
        <Labeled label="Verification Status Id" value={<ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Company Foundation Date" value={<DateField source="company_foundation_date" />} />
        <Labeled label="Rating Placement In Breed" value={<NumberField source="rating_placement_in_breed" />} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Lead Conversion Score" value={<NumberField source="lead_conversion_score" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Activity",
        content: (
          <ReferenceManyField reference={"activity"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="title" />
              <DateField source="start_date" />
              <DateField source="due_date" />
              <ReferenceField source="priority_id" reference="activity_priority"><TextField source="name" /></ReferenceField>
              <TextField source="author_id" />
              <BooleanField source="remind_to_author" />
              <DateField source="remind_to_author_date" />
              <TextField source="owner_id" />
              <BooleanField source="remind_to_owner" />
              <DateField source="remind_to_owner_date" />
              <ReferenceField source="type_id" reference="activity_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="activity_category_id" reference="activity_category"><TextField source="name" /></ReferenceField>
              <BooleanField source="show_in_scheduler" />
              <ReferenceField source="status_id" reference="activity_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="result_id" reference="activity_result"><TextField source="name" /></ReferenceField>
              <TextField source="detailed_result" />
              <ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <TextField source="sender" />
              <TextField source="recepient" />
              <TextField source="copy_recepient" />
              <TextField source="blind_copy_recepient" />
              <TextField source="body" />
              <TextField source="notes" />
              <TextField source="color" />
              <DateField source="send_date" />
              <NumberField source="duration_in_minutes" />
              <TextField source="error_on_send" />
              <TextField source="duration_in_mnutes_and_hours" />
              <TextField source="allowed_result" />
              <BooleanField source="created_by_inv_crm" />
              <BooleanField source="is_html_body" />
              <TextField source="mail_hash" />
              <TextField source="process_element_id" />
              <TextField source="global_activity_id" />
              <BooleanField source="is_need_process" />
              <ReferenceField source="activity_connection_id" reference="activity"><TextField source="name" /></ReferenceField>
              <TextField source="organizer_id" />
              <TextField source="header_properties" />
              <BooleanField source="is_auto_submitted" />
              <TextField source="sender_contact_id" />
              <TextField source="preview" />
              <TextField source="user_email_address" />
              <TextField source="location" />
              <TextField source="enrich_status" />
              <BooleanField source="service_processed" />
              <BooleanField source="is_not_published" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="queue_item_id" />
              <ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="full_project_name" />
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              <BooleanField source="is_template" />
              <TextField source="owner_role_id" />
              <DateField source="remote_created_on" />
              <ReferenceField source="competition_backup_id" reference="competition_backup"><TextField source="name" /></ReferenceField>
              <ReferenceField source="competition_id" reference="competition"><TextField source="name" /></ReferenceField>
              <ReferenceField source="issue_type_id" reference="issue_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="user_quest_id" reference="user_quest"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Account",
        content: (
          <ReferenceManyField reference={"account"} target={"parent_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <TextField source="owner_id" />
              <ReferenceField source="ownership_id" reference="account_ownership"><TextField source="name" /></ReferenceField>
              <TextField source="primary_contact_id" />
              <ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>
              <TextField source="code" />
              <ReferenceField source="type_id" reference="account_type"><TextField source="name" /></ReferenceField>
              <TextField source="phone" />
              <TextField source="additional_phone" />
              <TextField source="fax" />
              <TextField source="web" />
              <ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>
              <TextField source="address" />
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <TextField source="zip" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_category_id" reference="account_category"><TextField source="name" /></ReferenceField>
              <TextField source="notes" />
              <TextField source="logo" />
              <TextField source="alternative_name" />
              <TextField source="gpsn" />
              <TextField source="gpse" />
              <NumberField source="completeness" />
              <TextField source="aum" />
              <TextField source="trim_code" />
              <ReferenceField source="status_id" reference="account_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="affix_type_id" reference="affix_type"><TextField source="name" /></ReferenceField>
              <TextField source="about_us" />
              <TextField source="url" />
              <TextField source="duplicate_group_id" />
              <ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>
              <TextField source="duplicate_id" />
              <TextField source="avatar_url" />
              <BooleanField source="has_kennel_name" />
              <NumberField source="rating" />
              <DateField source="since" />
              <BooleanField source="verfied" />
              <BooleanField source="verified" />
              <ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>
              <DateField source="company_foundation_date" />
              <NumberField source="rating_placement_in_breed" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <NumberField source="lead_conversion_score" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Contact",
        content: (
          <ReferenceManyField reference={"contact"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
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
              <ReferenceField source="promote_breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" />
              <NumberField source="lead_conversion_score" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Litter",
        content: (
          <ReferenceManyField reference={"litter"} target={"kennel_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="father_id" />
              <TextField source="mother_id" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="mating_period_id" reference="period"><TextField source="name" /></ReferenceField>
              <DateField source="date_of_birth" />
              <ReferenceField source="status_id" reference="litter_status"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" />
              <TextField source="url" />
              <ReferenceField source="letter_id" reference="letter"><TextField source="name" /></ReferenceField>
              <NumberField source="male_amount" />
              <NumberField source="female_amount" />
              <BooleanField source="is_public" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Order",
        content: (
          <ReferenceManyField reference={"\"order\""} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Event",
        content: (
          <ReferenceManyField reference={"event"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="type_id" reference="event_type"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="status_id" reference="event_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <TextField source="goal" />
              <ReferenceField source="territory_id" reference="territory"><TextField source="name" /></ReferenceField>
              <ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>
              <TextField source="actual_response" />
              <NumberField source="primary_budgeted_cost" />
              <NumberField source="primary_expected_revenue" />
              <NumberField source="primary_actual_cost" />
              <NumberField source="primary_actual_revenue" />
              <TextField source="notes" />
              <DateField source="last_actualize_date" />
              <NumberField source="recipient_count" />
              <TextField source="address" />
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <TextField source="url" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Project",
        content: (
          <ReferenceManyField reference={"project"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_entry_type_id" reference="project_entry_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="project_type"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="status_id" reference="project_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <NumberField source="duration" />
              <DateField source="deadline" />
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
        ),
      }
          ,
        
      {
        label: "Service Pact",
        content: (
          <ReferenceManyField reference={"service_pact"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="status_id" reference="service_pact_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <TextField source="owner_id" />
              <TextField source="number" />
              <ReferenceField source="service_provider_contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <TextField source="notes" />
              <ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>
              <ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Service Item",
        content: (
          <ReferenceManyField reference={"service_item"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <NumberField source="reaction_time_value" />
              <TextField source="reaction_time_unit_id" />
              <NumberField source="solution_time_value" />
              <TextField source="solution_time_unit_id" />
              <TextField source="notes" />
              <TextField source="reaction_time" />
              <TextField source="solution_time" />
              <TextField source="owner_id" />
              <ReferenceField source="calendar_id" reference="calendar"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="service_category"><TextField source="name" /></ReferenceField>
              <NumberField source="sort_order" />
              <TextField source="description" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item",
        content: (
          <ReferenceManyField reference={"conf_item"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="type_id" reference="config_item_type"><TextField source="name" /></ReferenceField>
              <TextField source="serial_number" />
              <TextField source="inventory_number" />
              <ReferenceField source="status_id" reference="config_item_status"><TextField source="name" /></ReferenceField>
              <DateField source="purchase_date" />
              <DateField source="cancel_date" />
              <DateField source="warranty_until" />
              <TextField source="owner_id" />
              <ReferenceField source="parent_conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="config_item_category"><TextField source="name" /></ReferenceField>
              <TextField source="notes" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <TextField source="street" />
              <TextField source="address" />
              <TextField source="business_process_id" />
              <NumberField source="priority" />
              <TextField source="conf_item_image" />
              <TextField source="description" />
              <ReferenceField source="parsing_status_id" reference="conf_item_parsing_status"><TextField source="name" /></ReferenceField>
              <BooleanField source="need_parse" />
              <ReferenceField source="confidence_level_id" reference="data_confidence_level"><TextField source="name" /></ReferenceField>
              <ReferenceField source="data_quality_level_id" reference="data_quality_level"><TextField source="name" /></ReferenceField>
              <TextField source="prime_entity_name" />
              <NumberField source="quest_reward" />
              <TextField source="url" />
              <TextField source="page_model" />
              <NumberField source="quest_cycle_interval" />
              <TextField source="quest_type_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Post Feed",
        content: (
          <ReferenceManyField reference={"post_feed"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="pet_id" />
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Breed",
        content: (
          <ReferenceManyField reference={"breed"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <BooleanField source="differ_by_coat_color" />
              <BooleanField source="differ_by_coat_type" />
              <BooleanField source="differ_by_size" />
              <ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>
              <TextField source="authentic_name" />
              <BooleanField source="differ_by_body_feature" />
              <NumberField source="pet_profile_count" />
              <ReferenceField source="category_id" reference="breed_category"><TextField source="name" /></ReferenceField>
              <NumberField source="kennel_count" />
              <BooleanField source="has_related_breed" />
              <TextField source="admin_name" />
              <TextField source="url" />
              <NumberField source="patron_count" />
              <TextField source="avatar_url" />
              <NumberField source="rating" />
              <NumberField source="achievement_progress" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <NumberField source="payment_rating" />
              <ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Competition",
        content: (
          <ReferenceManyField reference={"competition"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="parent_id" reference="competition"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="competition_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="template_id" reference="competition"><TextField source="name" /></ReferenceField>
              <BooleanField source="exists_qualification" />
              <BooleanField source="exists_place" />
              <BooleanField source="exists_award" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <NumberField source="order" />
              <ReferenceField source="category_id" reference="competition_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Note",
        content: (
          <ReferenceManyField reference={"note"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="pet_id" />
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Public Data",
        content: (
          <ReferenceManyField reference={"public_data"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="hash_md5" />
              <TextField source="contact_id" />
              <TextField source="pet_id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
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
        ),
      }
          ,
        
      {
        label: "Competition Backup",
        content: (
          <ReferenceManyField reference={"competition_backup"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <BooleanField source="exists_award" />
              <BooleanField source="exists_place" />
              <BooleanField source="exists_qualification" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="competition_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Invoice",
        content: (
          <ReferenceManyField reference={"invoice"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
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
              <TextField source="contact_id" />
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>
              <NumberField source="amount_without_tax" />
              <NumberField source="primary_amount_without_tax" />
              <NumberField source="payment_amount_without_tax" />
              <NumberField source="primary_payment_amount_without_tax" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <BooleanField source="created_from_order" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Fin Account",
        content: (
          <ReferenceManyField reference={"fin_account"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <NumberField source="amount" />
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <DateField source="date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Breed Standard Status",
        content: (
          <ReferenceManyField reference={"breed_standard_status"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Contact Career",
        content: (
          <ReferenceManyField reference={"contact_career"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="contact_id" />
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
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Cover In Account",
        content: (
          <ReferenceManyField reference={"cover_in_account"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <DateField source="setup_date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Account Communication",
        content: (
          <ReferenceManyField reference={"account_communication"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="number" />
              <NumberField source="position" />
              <TextField source="social_media_id" />
              <TextField source="search_number" />
              <BooleanField source="primary" />
              <BooleanField source="exists" />
              <BooleanField source="non_actual" />
              <DateField source="date_set_non_actual" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Pet Qualification",
        content: (
          <ReferenceManyField reference={"pet_qualification"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <NumberField source="code" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Account In Tag",
        content: (
          <ReferenceManyField reference={"account_in_tag"} target={"entity_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="tag_id" reference="account_tag"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Relationship",
        content: (
          <ReferenceManyField reference={"relationship"} target={"account_b_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="reverse_relation_type_id" reference="relation_type"><TextField source="name" /></ReferenceField>
              <BooleanField source="active" />
              <TextField source="description" />
              <ReferenceField source="contact_a_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_b_id" reference="contact"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Pet Service In Account",
        content: (
          <ReferenceManyField reference={"pet_service_in_account"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <BooleanField source="active" />
              <ReferenceField source="service_type_id" reference="pet_service_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_service_status_id" reference="pet_service_status"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Breed In Kennel",
        content: (
          <ReferenceManyField reference={"breed_in_kennel"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_standard_id" reference="breed_standard"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Collection Entity",
        content: (
          <ReferenceManyField reference={"collection_entity"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="record_id" />
              <ReferenceField source="collection_id" reference="collection"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              <TextField source="pet_breed_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Breed Group",
        content: (
          <ReferenceManyField reference={"breed_group"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <NumberField source="code" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Studbook",
        content: (
          <ReferenceManyField reference={"studbook"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="status_id" reference="studbook_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="studbook_type"><TextField source="name" /></ReferenceField>
              <TextField source="alternate_names" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Title",
        content: (
          <ReferenceManyField reference={"title"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_processed" />
              <NumberField source="rating" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Award",
        content: (
          <ReferenceManyField reference={"award"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Breed In Account",
        content: (
          <ReferenceManyField reference={"breed_in_account"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="breed_standard_id" reference="breed_standard"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <NumberField source="pet_count" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Breed Standard",
        content: (
          <ReferenceManyField reference={"breed_standard"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <ReferenceField source="subsection_id" reference="breed_subsection"><TextField source="name" /></ReferenceField>
              <ReferenceField source="section_id" reference="breed_section"><TextField source="name" /></ReferenceField>
              <ReferenceField source="group_id" reference="breed_group"><TextField source="name" /></ReferenceField>
              <TextField source="code" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <DateField source="effective" />
              <DateField source="approved" />
              <TextField source="link" />
              <BooleanField source="working_trial" />
              <ReferenceField source="status_id" reference="breed_standard_status"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_variable_divisions" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Account Address",
        content: (
          <ReferenceManyField reference={"account_address"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="address_type_id" reference="address_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <TextField source="address" />
              <TextField source="zip" />
              <BooleanField source="primary" />
              <TextField source="gpsn" />
              <TextField source="gpse" />
              <TextField source="full_address" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Account Billing Info",
        content: (
          <ReferenceManyField reference={"account_billing_info"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <TextField source="billing_info" />
              <ReferenceField source="account_manager_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="chief_accountant_id" reference="contact"><TextField source="name" /></ReferenceField>
              <TextField source="legal_unit" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Pet Class",
        content: (
          <ReferenceManyField reference={"pet_class"} target={"provider_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <NumberField source="age_to" />
              <NumberField source="age_from" />
              <NumberField source="code" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item Measurement",
        content: (
          <ReferenceManyField reference={"conf_item_measurement"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <NumberField source="value" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Account Review",
        content: (
          <ReferenceManyField reference={"account_review"} target={"account_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="contact_id" />
              <NumberField source="rating" />
              <NumberField source="order_number" />
              <TextField source="review" />
              <TextField source="test" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ]
    }
  />
);
