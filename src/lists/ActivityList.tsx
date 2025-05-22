import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const ActivityFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ActivityList = () => (
  <List filters={ActivityFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="start_date" />
      <DateField source="due_date" />
      <ReferenceField source="priority_id" reference="priorities" />
      <ReferenceField source="author_id" reference="authors" />
      <BooleanField source="remind_to_author" />
      <TextField source="remind_to_author_date" />
      <ReferenceField source="owner_id" reference="owners" />
      <BooleanField source="remind_to_owner" />
      <TextField source="remind_to_owner_date" />
      <ReferenceField source="type_id" reference="types" />
      <ReferenceField
        source="activity_category_id"
        reference="activity_categories"
      />
      <BooleanField source="show_in_scheduler" />
      <ReferenceField source="status_id" reference="statuses" />
      <ReferenceField source="result_id" reference="results" />
      <DateField source="detailed_result" />
      <ReferenceField source="time_zone_id" reference="time_zones" />
      <ReferenceField source="account_id" reference="accounts" />
      <ReferenceField source="contact_id" reference="contacts" />
      <DateField source="sender" />
      <DateField source="recepient" />
      <DateField source="copy_recepient" />
      <DateField source="blind_copy_recepient" />
      <DateField source="body" />
      <TextField source="notes" />
      <TextField source="color" />
      <TextField source="send_date" />
      <DateField source="duration_in_minutes" />
      <DateField source="error_on_send" />
      <TextField source="duration_in_mnutes_and_hours" />
      <DateField source="allowed_result" />
      <BooleanField source="created_by_inv_crm" />
      <DateField source="process_listeners" />
      <BooleanField source="is_html_body" />
      <DateField source="mail_hash" />
      <ReferenceField
        source="process_element_id"
        reference="process_elements"
      />
      <ReferenceField
        source="global_activity_id"
        reference="global_activities"
      />
      <BooleanField source="is_need_process" />
      <ReferenceField
        source="activity_connection_id"
        reference="activity_connections"
      />
      <ReferenceField source="organizer_id" reference="organizers" />
      <DateField source="header_properties" />
      <BooleanField source="is_auto_submitted" />
      <ReferenceField source="sender_contact_id" reference="sender_contacts" />
      <DateField source="preview" />
      <DateField source="user_email_address" />
      <DateField source="location" />
      <DateField source="enrich_status" />
      <BooleanField source="service_processed" />
      <BooleanField source="is_not_published" />
      <ReferenceField source="conf_item_id" reference="conf_items" />
      <ReferenceField source="invoice_id" reference="invoices" />
      <ReferenceField source="event_id" reference="events" />
      <ReferenceField source="queue_item_id" reference="queue_items" />
      <ReferenceField source="order_id" reference="orders" />
      <ReferenceField source="project_id" reference="projects" />
      <DateField source="full_project_name" />
      <ReferenceField source="litter_id" reference="litter" />
      <ReferenceField source="pet_id" reference="pets" />
      <BooleanField source="is_template" />
      <ReferenceField source="owner_role_id" reference="owner_roles" />
      <TextField source="remote_created_on" />
      <ReferenceField
        source="competition_backup_id"
        reference="competition_backups"
      />
      <ReferenceField source="competition_id" reference="competitions" />
      <ReferenceField source="issue_type_id" reference="issue_types" />
      <ReferenceField source="user_quest_id" reference="user_quests" />
      <ReferenceField source="pet_breed_id" reference="pet_breeds" />
    </Datagrid>
  </List>
);
