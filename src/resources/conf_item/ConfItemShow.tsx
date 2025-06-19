// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const ConfItemShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="config_item_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Serial Number" required={false} value={<TextField source="serial_number" />} />
        <Labeled label="Inventory Number" required={false} value={<TextField source="inventory_number" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="config_item_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Purchase Date" required={false} value={<DateField source="purchase_date" />} />
        <Labeled label="Cancel Date" required={false} value={<DateField source="cancel_date" />} />
        <Labeled label="Warranty Until" required={false} value={<DateField source="warranty_until" />} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Parent Conf Item Id" required={false} value={<ReferenceField source="parent_conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="config_item_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Country Id" required={false} value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" required={false} value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="City Id" required={false} value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Street" required={false} value={<TextField source="street" />} />
        <Labeled label="Address" required={false} value={<TextField source="address" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Provider Id" required={false} value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Business Process Id" required={false} value={<TextField source="business_process_id" />} />
        <Labeled label="Priority" required={false} value={<NumberField source="priority" />} />
        <Labeled label="Conf Item Image" required={false} value={<TextField source="conf_item_image" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Parsing Status Id" required={false} value={<ReferenceField source="parsing_status_id" reference="conf_item_parsing_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Need Parse" required={false} value={<BooleanField source="need_parse" />} />
        <Labeled label="Confidence Level Id" required={false} value={<ReferenceField source="confidence_level_id" reference="data_confidence_level"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Data Quality Level Id" required={false} value={<ReferenceField source="data_quality_level_id" reference="data_quality_level"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Prime Entity Name" required={false} value={<TextField source="prime_entity_name" />} />
        <Labeled label="Quest Reward" required={false} value={<NumberField source="quest_reward" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Page Model" required={false} value={<TextField source="page_model" />} />
        <Labeled label="Quest Cycle Interval" required={false} value={<NumberField source="quest_cycle_interval" />} />
        <Labeled label="Quest Type Id" required={false} value={<TextField source="quest_type_id" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="activity" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="activity" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="queue_item_id" label="Queue Item Id" />
              <ReferenceField source="order_id" reference="order" label="Order Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="full_project_name" label="Full Project Name" />
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_template" label="Is Template" />
              <TextField source="owner_role_id" label="Owner Role Id" />
              <DateField source="remote_created_on" label="Remote Created On" />
              <ReferenceField source="competition_backup_id" reference="competition_backup" label="Competition Backup Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="competition_id" reference="competition" label="Competition Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="issue_type_id" reference="issue_type" label="Issue Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="user_quest_id" reference="user_quest" label="User Quest Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Quest Stage",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="quest_stage" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="quest_stage" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="title" label="Title" />
              <TextField source="business_process_id" label="Business Process Id" />
              <ReferenceField source="quest_id" reference="quest" label="Quest Id"><TextField source="name" /></ReferenceField>
              <NumberField source="order" label="Order" />
              <TextField source="description" label="Description" />
              <TextField source="code" label="Code" />
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
          <ChildCreateButton resource="quest_user_data" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="quest_user_data" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="quest_status_id" reference="quest_status" label="Quest Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="current_stage_id" reference="quest_stage" label="Current Stage Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <TextField source="data" label="Data" />
              <DateField source="due_date" label="Due Date" />
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
          <ChildCreateButton resource="raw_data" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="raw_data" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <TextField source="json" label="Json" />
              <ReferenceField source="status_id" reference="raw_data_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <TextField source="log" label="Log" />
              <TextField source="redirect_url" label="Redirect Url" />
              <TextField source="record_id" label="Record Id" />
              <TextField source="entity_name" label="Entity Name" />
              <TextField source="model" label="Model" />
              <TextField source="hash_md5" label="Hash Md5" />
              <TextField source="contact_id" label="Contact Id" />
              <TextField source="account_id" label="Account Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
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
          <ChildCreateButton resource="conf_item" fkField="parent_conf_item_id" />
        </div>
        <ReferenceManyField reference="conf_item" target="parent_conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="category_id" reference="config_item_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <TextField source="notes" label="Notes" />
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <TextField source="street" label="Street" />
              <TextField source="address" label="Address" />
              <ReferenceField source="provider_id" reference="account" label="Provider Id"><TextField source="name" /></ReferenceField>
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
    label: "Cashflow",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cashflow" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="cashflow" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="number" label="Number" />
              <ReferenceField source="type_id" reference="cashflow_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="details" label="Details" />
              <ReferenceField source="category_id" reference="cashflow_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="cashflow_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" label="Currency Rate" />
              <NumberField source="amount" label="Amount" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="income_fin_account_id" reference="fin_account" label="Income Fin Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="outcome_fin_account_id" reference="fin_account" label="Outcome Fin Account Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Service In Conf Item",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="service_in_conf_item" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="service_in_conf_item" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="service_item_id" reference="service_item" label="Service Item Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_category_id" reference="dependency_category" label="Dependency Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type" label="Dependency Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item Address",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_address" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="conf_item_address" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region" label="Region Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city" label="City Id"><TextField source="name" /></ReferenceField>
              <TextField source="street" label="Street" />
              <TextField source="address" label="Address" />
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <BooleanField source="current" label="Current" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item In Case",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_in_case" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="conf_item_in_case" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <BooleanField source="major" label="Major" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Process Selector In Conf Item",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="process_selector_in_conf_item" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="process_selector_in_conf_item" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <BooleanField source="is_collection" label="Is Collection" />
              <TextField source="selector" label="Selector" />
              <TextField source="parameter_name" label="Parameter Name" />
              <TextField source="result_element_name" label="Result Element Name" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Raw Data Session Cookies",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="raw_data_session_cookies" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="raw_data_session_cookies" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="cookies" label="Cookies" />
              <TextField source="headers" label="Headers" />
              <TextField source="domen" label="Domen" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item In Tag",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_in_tag" fkField="entity_id" />
        </div>
        <ReferenceManyField reference="conf_item_in_tag" target="entity_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item Process Launch",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_process_launch" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="conf_item_process_launch" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <NumberField source="launch_number" label="Launch Number" />
              <NumberField source="duration" label="Duration" />
              <DateField source="start_date" label="Start Date" />
              <DateField source="due_date" label="Due Date" />
              <NumberField source="changed_record_count" label="Changed Record Count" />
              <DateField source="update_date" label="Update Date" />
              <BooleanField source="reanimate" label="Reanimate" />
              <TextField source="parameters_value" label="Parameters Value" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Process Parameter In Conf Item",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="process_parameter_in_conf_item" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="process_parameter_in_conf_item" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="parameter_value" label="Parameter Value" />
              <TextField source="parameter_name" label="Parameter Name" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item Relationship",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_relationship" fkField="conf_item_b_id" />
        </div>
        <ReferenceManyField reference="conf_item_relationship" target="conf_item_b_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="dependency_category_id" reference="dependency_category" label="Dependency Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type" label="Dependency Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Parsing Business Process In Conf Item",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="parsing_business_process_in_conf_item" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="parsing_business_process_in_conf_item" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="priority" label="Priority" />
              <TextField source="business_process_id" label="Business Process Id" />
              <BooleanField source="is_active" label="Is Active" />
              <TextField source="provider_class_name" label="Provider Class Name" />
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
          <ChildCreateButton resource="conf_item_measurement" fkField="conf_item_id" />
        </div>
        <ReferenceManyField reference="conf_item_measurement" target="conf_item_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="value" label="Value" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item Comparison Result",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_comparison_result" fkField="conf_item_minus_id" />
        </div>
        <ReferenceManyField reference="conf_item_comparison_result" target="conf_item_minus_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="delta" label="Delta" />
              <TextField source="contact_id" label="Contact Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
