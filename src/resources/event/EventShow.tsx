// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const EventShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="event_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="event_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="End Date" required={false} value={<DateField source="end_date" />} />
        <Labeled label="Goal" required={false} value={<TextField source="goal" />} />
        <Labeled label="Territory Id" required={false} value={<ReferenceField source="territory_id" reference="territory"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Industry Id" required={false} value={<ReferenceField source="industry_id" reference="account_industry"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Actual Response" required={false} value={<TextField source="actual_response" />} />
        <Labeled label="Primary Budgeted Cost" required={false} value={<NumberField source="primary_budgeted_cost" />} />
        <Labeled label="Primary Expected Revenue" required={false} value={<NumberField source="primary_expected_revenue" />} />
        <Labeled label="Primary Actual Cost" required={false} value={<NumberField source="primary_actual_cost" />} />
        <Labeled label="Primary Actual Revenue" required={false} value={<NumberField source="primary_actual_revenue" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Last Actualize Date" required={false} value={<DateField source="last_actualize_date" />} />
        <Labeled label="Recipient Count" required={false} value={<NumberField source="recipient_count" />} />
        <Labeled label="Organizer Id" required={false} value={<ReferenceField source="organizer_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Address" required={false} value={<TextField source="address" />} />
        <Labeled label="City Id" required={false} value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" required={false} value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="activity" />
        </div>
        <ReferenceManyField reference="activity" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
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
    label: "Raw Data",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="raw_data" />
        </div>
        <ReferenceManyField reference="raw_data" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <TextField source="json" label="Json" />
              <ReferenceField source="status_id" reference="raw_data_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <TextField source="log" label="Log" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <TextField source="redirect_url" label="Redirect Url" />
              <TextField source="record_id" label="Record Id" />
              <TextField source="entity_name" label="Entity Name" />
              <TextField source="model" label="Model" />
              <TextField source="hash_md5" label="Hash Md5" />
              <TextField source="contact_id" label="Contact Id" />
              <TextField source="account_id" label="Account Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
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
          <CreateButton resource="project" />
        </div>
        <ReferenceManyField reference="project" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
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
    label: "Post",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="post" />
        </div>
        <ReferenceManyField reference="post" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <NumberField source="latitude" label="Latitude" />
              <NumberField source="longitude" label="Longitude" />
              <TextField source="photos" label="Photos" />
              <TextField source="participants" label="Participants" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
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
          <CreateButton resource="note" />
        </div>
        <ReferenceManyField reference="note" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <TextField source="pet_id" label="Pet Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
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
          <CreateButton resource="public_data" />
        </div>
        <ReferenceManyField reference="public_data" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="hash_md5" label="Hash Md5" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <TextField source="pet_id" label="Pet Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
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
    label: "Location In Event",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="location_in_event" />
        </div>
        <ReferenceManyField reference="location_in_event" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="location_type_id" reference="location_type" label="Location Type Id"><TextField source="name" /></ReferenceField>
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
          <CreateButton resource="collection_entity" />
        </div>
        <ReferenceManyField reference="collection_entity" target="event_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="collection_id" reference="collection" label="Collection Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
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
