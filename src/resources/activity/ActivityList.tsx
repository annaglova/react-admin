import { BooleanField, Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

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
      <ReferenceField source="priority_id" reference="activity_priority">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="author_id" />
      <BooleanField source="remind_to_author" />
      <DateField source="remind_to_author_date" />
      <TextField source="owner_id" />
      <BooleanField source="remind_to_owner" />
      <DateField source="remind_to_owner_date" />
      <ReferenceField source="type_id" reference="activity_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="activity_category_id" reference="activity_category">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="show_in_scheduler" />
      <ReferenceField source="status_id" reference="activity_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="result_id" reference="activity_result">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="detailed_result" />
      <ReferenceField source="time_zone_id" reference="time_zone">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceField source="activity_connection_id" reference="activity">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceField source="conf_item_id" reference="conf_item">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="invoice_id" reference="invoice">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="event_id" reference="event">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="queue_item_id" />
      <ReferenceField source="order_id" reference=""order"">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="full_project_name" />
      <ReferenceField source="litter_id" reference="litter">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_id" />
      <BooleanField source="is_template" />
      <TextField source="owner_role_id" />
      <DateField source="remote_created_on" />
      <ReferenceField source="competition_backup_id" reference="competition_backup">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="competition_id" reference="competition">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="issue_type_id" reference="issue_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="user_quest_id" reference="user_quest">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="pet_breed_id" />
    </Datagrid>
  </List>
);
