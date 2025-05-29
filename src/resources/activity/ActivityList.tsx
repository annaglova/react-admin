import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const ActivityFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityList = () => (
  <List filters={ActivityFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="start_date" />
      <DateField source="due_date" />
      <TextField source="priority_id" />
      <TextField source="author_id" />
      <BooleanField source="remind_to_author" />
      <DateField source="remind_to_author_date" />
      <TextField source="owner_id" />
      <BooleanField source="remind_to_owner" />
      <DateField source="remind_to_owner_date" />
      <TextField source="type_id" />
      <TextField source="activity_category_id" />
      <BooleanField source="show_in_scheduler" />
      <TextField source="status_id" />
      <TextField source="result_id" />
      <TextField source="detailed_result" />
      <TextField source="time_zone_id" />
      <TextField source="account_id" />
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
      <TextField source="activity_connection_id" />
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
      <TextField source="conf_item_id" />
      <TextField source="invoice_id" />
      <TextField source="event_id" />
      <TextField source="queue_item_id" />
      <TextField source="order_id" />
      <TextField source="project_id" />
      <TextField source="full_project_name" />
      <TextField source="litter_id" />
      <TextField source="pet_id" />
      <BooleanField source="is_template" />
      <TextField source="owner_role_id" />
      <DateField source="remote_created_on" />
      <TextField source="competition_backup_id" />
      <TextField source="competition_id" />
      <TextField source="issue_type_id" />
      <TextField source="user_quest_id" />
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
