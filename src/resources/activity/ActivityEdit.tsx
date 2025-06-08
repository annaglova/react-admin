import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ActivityEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="title"  />}</>
    }
    fieldsLeft={
      <>
        <DateInput source="start_date"  />
          <DateInput source="due_date"  />
          <ReferenceInput source="priority_id" reference="activity_priority">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="author_id"  />
          <BooleanInput source="remind_to_author"  />
          <DateInput source="remind_to_author_date"  />
          <TextInput source="owner_id"  />
          <BooleanInput source="remind_to_owner"  />
          <DateInput source="remind_to_owner_date"  />
          <ReferenceInput source="type_id" reference="activity_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="activity_category_id" reference="activity_category">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="show_in_scheduler"  />
          <ReferenceInput source="status_id" reference="activity_status">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="result_id" reference="activity_result">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="detailed_result"  />
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="contact_id"  />
          <TextInput source="sender"  />
          <TextInput source="recepient"  />
          <TextInput source="copy_recepient"  />
          <TextInput source="blind_copy_recepient"  />
          <TextInput source="body"  />
          <TextInput source="notes"  />
          <TextInput source="color"  />
          <DateInput source="send_date"  />
          <NumberInput source="duration_in_minutes"  />
          <TextInput source="error_on_send"  />
          <TextInput source="duration_in_mnutes_and_hours"  />
          <TextInput source="allowed_result"  />
          <BooleanInput source="created_by_inv_crm"  />
          <BooleanInput source="is_html_body"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="mail_hash"  />
          <TextInput source="process_element_id"  />
          <TextInput source="global_activity_id"  />
          <BooleanInput source="is_need_process"  />
          <ReferenceInput source="activity_connection_id" reference="activity">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="organizer_id"  />
          <TextInput source="header_properties"  />
          <BooleanInput source="is_auto_submitted"  />
          <TextInput source="sender_contact_id"  />
          <TextInput source="preview"  />
          <TextInput source="user_email_address"  />
          <TextInput source="location"  />
          <TextInput source="enrich_status"  />
          <BooleanInput source="service_processed"  />
          <BooleanInput source="is_not_published"  />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="queue_item_id"  />
          <ReferenceInput source="order_id" reference="order">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="full_project_name"  />
          <ReferenceInput source="litter_id" reference="litter">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_id"  />
          <BooleanInput source="is_template"  />
          <TextInput source="owner_role_id"  />
          <DateInput source="remote_created_on"  />
          <ReferenceInput source="competition_backup_id" reference="competition_backup">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="competition_id" reference="competition">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="issue_type_id" reference="issue_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="user_quest_id" reference="user_quest">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="pet_breed_id"  />
      </>
    }
  />
);
