import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ActivityCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="title" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <DateInput source="start_date" validate={[]} />
          <DateInput source="due_date" validate={[]} />
          <ReferenceInput source="priority_id" reference="activity_priority">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="author_id" validate={[]} />
          <BooleanInput source="remind_to_author" validate={[]} />
          <DateInput source="remind_to_author_date" validate={[]} />
          <TextInput source="owner_id" validate={[]} />
          <BooleanInput source="remind_to_owner" validate={[]} />
          <DateInput source="remind_to_owner_date" validate={[]} />
          <ReferenceInput source="type_id" reference="activity_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="activity_category_id" reference="activity_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="show_in_scheduler" validate={[]} />
          <ReferenceInput source="status_id" reference="activity_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="result_id" reference="activity_result">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="detailed_result" validate={[]} />
          <ReferenceInput source="time_zone_id" reference="time_zone">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="contact_id" validate={[]} />
          <TextInput source="sender" validate={[]} />
          <TextInput source="recepient" validate={[]} />
          <TextInput source="copy_recepient" validate={[]} />
          <TextInput source="blind_copy_recepient" validate={[]} />
          <TextInput source="body" validate={[]} />
          <TextInput source="notes" validate={[]} />
          <TextInput source="color" validate={[]} />
          <DateInput source="send_date" validate={[]} />
          <NumberInput source="duration_in_minutes" validate={[]} />
          <TextInput source="error_on_send" validate={[]} />
          <TextInput source="duration_in_mnutes_and_hours" validate={[]} />
          <TextInput source="allowed_result" validate={[]} />
          <BooleanInput source="created_by_inv_crm" validate={[]} />
          <BooleanInput source="is_html_body" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="mail_hash" validate={[]} />
          <TextInput source="process_element_id" validate={[]} />
          <TextInput source="global_activity_id" validate={[]} />
          <BooleanInput source="is_need_process" validate={[]} />
          <ReferenceInput source="activity_connection_id" reference="activity">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="organizer_id" validate={[]} />
          <TextInput source="header_properties" validate={[]} />
          <BooleanInput source="is_auto_submitted" validate={[]} />
          <TextInput source="sender_contact_id" validate={[]} />
          <TextInput source="preview" validate={[]} />
          <TextInput source="user_email_address" validate={[]} />
          <TextInput source="location" validate={[]} />
          <TextInput source="enrich_status" validate={[]} />
          <BooleanInput source="service_processed" validate={[]} />
          <BooleanInput source="is_not_published" validate={[]} />
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="queue_item_id" validate={[]} />
          <ReferenceInput source="order_id" reference="order">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="full_project_name" validate={[]} />
          <ReferenceInput source="litter_id" reference="litter">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_id" validate={[]} />
          <BooleanInput source="is_template" validate={[]} />
          <TextInput source="owner_role_id" validate={[]} />
          <DateInput source="remote_created_on" validate={[]} />
          <ReferenceInput source="competition_backup_id" reference="competition_backup">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="competition_id" reference="competition">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="issue_type_id" reference="issue_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="user_quest_id" reference="user_quest">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="pet_breed_id" validate={[]} />
      </>
    }
  />
);
