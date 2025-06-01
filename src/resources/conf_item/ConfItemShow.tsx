// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ConfItemShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="config_item_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Serial Number" value={<TextField source="serial_number" />} />
        <Labeled label="Inventory Number" value={<TextField source="inventory_number" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="config_item_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Purchase Date" value={<DateField source="purchase_date" />} />
        <Labeled label="Cancel Date" value={<DateField source="cancel_date" />} />
        <Labeled label="Warranty Until" value={<DateField source="warranty_until" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Parent Conf Item Id" value={<ReferenceField source="parent_conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="config_item_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Country Id" value={<ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Region Id" value={<ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>} />
        <Labeled label="City Id" value={<ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Street" value={<TextField source="street" />} />
        <Labeled label="Address" value={<TextField source="address" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Provider Id" value={<ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Business Process Id" value={<TextField source="business_process_id" />} />
        <Labeled label="Priority" value={<NumberField source="priority" />} />
        <Labeled label="Conf Item Image" value={<TextField source="conf_item_image" />} />
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Parsing Status Id" value={<ReferenceField source="parsing_status_id" reference="conf_item_parsing_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Need Parse" value={<BooleanField source="need_parse" />} />
        <Labeled label="Confidence Level Id" value={<ReferenceField source="confidence_level_id" reference="data_confidence_level"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Data Quality Level Id" value={<ReferenceField source="data_quality_level_id" reference="data_quality_level"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Prime Entity Name" value={<TextField source="prime_entity_name" />} />
        <Labeled label="Quest Reward" value={<NumberField source="quest_reward" />} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Page Model" value={<TextField source="page_model" />} />
        <Labeled label="Quest Cycle Interval" value={<NumberField source="quest_cycle_interval" />} />
        <Labeled label="Quest Type Id" value={<TextField source="quest_type_id" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Activity",
        content: (
          <ReferenceManyField reference={"activity"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
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
        label: "Quest Stage",
        content: (
          <ReferenceManyField reference={"quest_stage"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="title" />
              <TextField source="business_process_id" />
              <ReferenceField source="quest_id" reference="quest"><TextField source="name" /></ReferenceField>
              <NumberField source="order" />
              <TextField source="description" />
              <TextField source="code" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Quest User Data",
        content: (
          <ReferenceManyField reference={"quest_user_data"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="quest_status_id" reference="quest_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="current_stage_id" reference="quest_stage"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <TextField source="data" />
              <DateField source="due_date" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Raw Data",
        content: (
          <ReferenceManyField reference={"raw_data"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="json" />
              <ReferenceField source="status_id" reference="raw_data_status"><TextField source="name" /></ReferenceField>
              <TextField source="log" />
              <TextField source="redirect_url" />
              <TextField source="record_id" />
              <TextField source="entity_name" />
              <TextField source="model" />
              <TextField source="hash_md5" />
              <TextField source="contact_id" />
              <TextField source="account_id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item",
        content: (
          <ReferenceManyField reference={"conf_item"} target={"parent_conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="category_id" reference="config_item_category"><TextField source="name" /></ReferenceField>
              <TextField source="notes" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <TextField source="street" />
              <TextField source="address" />
              <ReferenceField source="provider_id" reference="account"><TextField source="name" /></ReferenceField>
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
        label: "Cashflow",
        content: (
          <ReferenceManyField reference={"cashflow"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="number" />
              <ReferenceField source="type_id" reference="cashflow_type"><TextField source="name" /></ReferenceField>
              <TextField source="details" />
              <ReferenceField source="category_id" reference="cashflow_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="cashflow_status"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" />
              <NumberField source="amount" />
              <NumberField source="primary_amount" />
              <TextField source="notes" />
              <ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>
              <ReferenceField source="income_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="outcome_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Service In Conf Item",
        content: (
          <ReferenceManyField reference={"service_in_conf_item"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="service_item_id" reference="service_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_category_id" reference="dependency_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item Address",
        content: (
          <ReferenceManyField reference={"conf_item_address"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="region_id" reference="region"><TextField source="name" /></ReferenceField>
              <ReferenceField source="city_id" reference="city"><TextField source="name" /></ReferenceField>
              <TextField source="street" />
              <TextField source="address" />
              <DateField source="start_date" />
              <DateField source="end_date" />
              <BooleanField source="current" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item In Case",
        content: (
          <ReferenceManyField reference={"conf_item_in_case"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <BooleanField source="major" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Process Selector In Conf Item",
        content: (
          <ReferenceManyField reference={"process_selector_in_conf_item"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <BooleanField source="is_collection" />
              <TextField source="selector" />
              <TextField source="parameter_name" />
              <TextField source="result_element_name" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Raw Data Session Cookies",
        content: (
          <ReferenceManyField reference={"raw_data_session_cookies"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="cookies" />
              <TextField source="headers" />
              <TextField source="domen" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item In Tag",
        content: (
          <ReferenceManyField reference={"conf_item_in_tag"} target={"entity_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item Process Launch",
        content: (
          <ReferenceManyField reference={"conf_item_process_launch"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <NumberField source="launch_number" />
              <NumberField source="duration" />
              <DateField source="start_date" />
              <DateField source="due_date" />
              <NumberField source="changed_record_count" />
              <DateField source="update_date" />
              <BooleanField source="reanimate" />
              <TextField source="parameters_value" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Process Parameter In Conf Item",
        content: (
          <ReferenceManyField reference={"process_parameter_in_conf_item"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="parameter_value" />
              <TextField source="parameter_name" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item Relationship",
        content: (
          <ReferenceManyField reference={"conf_item_relationship"} target={"conf_item_b_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="dependency_category_id" reference="dependency_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="dependency_type_id" reference="dependency_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Parsing Business Process In Conf Item",
        content: (
          <ReferenceManyField reference={"parsing_business_process_in_conf_item"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <NumberField source="priority" />
              <TextField source="business_process_id" />
              <BooleanField source="is_active" />
              <TextField source="provider_class_name" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item Measurement",
        content: (
          <ReferenceManyField reference={"conf_item_measurement"} target={"conf_item_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <NumberField source="value" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Conf Item Comparison Result",
        content: (
          <ReferenceManyField reference={"conf_item_comparison_result"} target={"conf_item_minus_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <NumberField source="delta" />
              <TextField source="contact_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ]
    }
  />
);
