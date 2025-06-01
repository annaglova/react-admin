// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ActivityShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Title" value={<TextField source="title" />} />
        <Labeled label="Start Date" value={<DateField source="start_date" />} />
        <Labeled label="Due Date" value={<DateField source="due_date" />} />
        <Labeled label="Priority Id" value={<ReferenceField source="priority_id" reference="activity_priority"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Author Id" value={<TextField source="author_id" />} />
        <Labeled label="Remind To Author" value={<BooleanField source="remind_to_author" />} />
        <Labeled label="Remind To Author Date" value={<DateField source="remind_to_author_date" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Remind To Owner" value={<BooleanField source="remind_to_owner" />} />
        <Labeled label="Remind To Owner Date" value={<DateField source="remind_to_owner_date" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="activity_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Activity Category Id" value={<ReferenceField source="activity_category_id" reference="activity_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Show In Scheduler" value={<BooleanField source="show_in_scheduler" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="activity_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Result Id" value={<ReferenceField source="result_id" reference="activity_result"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Detailed Result" value={<TextField source="detailed_result" />} />
        <Labeled label="Time Zone Id" value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Sender" value={<TextField source="sender" />} />
        <Labeled label="Recepient" value={<TextField source="recepient" />} />
        <Labeled label="Copy Recepient" value={<TextField source="copy_recepient" />} />
        <Labeled label="Blind Copy Recepient" value={<TextField source="blind_copy_recepient" />} />
        <Labeled label="Body" value={<TextField source="body" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Color" value={<TextField source="color" />} />
        <Labeled label="Send Date" value={<DateField source="send_date" />} />
        <Labeled label="Duration In Minutes" value={<NumberField source="duration_in_minutes" />} />
        <Labeled label="Error On Send" value={<TextField source="error_on_send" />} />
        <Labeled label="Duration In Mnutes And Hours" value={<TextField source="duration_in_mnutes_and_hours" />} />
        <Labeled label="Allowed Result" value={<TextField source="allowed_result" />} />
        <Labeled label="Created By Inv Crm" value={<BooleanField source="created_by_inv_crm" />} />
        <Labeled label="Is Html Body" value={<BooleanField source="is_html_body" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Mail Hash" value={<TextField source="mail_hash" />} />
        <Labeled label="Process Element Id" value={<TextField source="process_element_id" />} />
        <Labeled label="Global Activity Id" value={<TextField source="global_activity_id" />} />
        <Labeled label="Is Need Process" value={<BooleanField source="is_need_process" />} />
        <Labeled label="Activity Connection Id" value={<ReferenceField source="activity_connection_id" reference="activity"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Organizer Id" value={<TextField source="organizer_id" />} />
        <Labeled label="Header Properties" value={<TextField source="header_properties" />} />
        <Labeled label="Is Auto Submitted" value={<BooleanField source="is_auto_submitted" />} />
        <Labeled label="Sender Contact Id" value={<TextField source="sender_contact_id" />} />
        <Labeled label="Preview" value={<TextField source="preview" />} />
        <Labeled label="User Email Address" value={<TextField source="user_email_address" />} />
        <Labeled label="Location" value={<TextField source="location" />} />
        <Labeled label="Enrich Status" value={<TextField source="enrich_status" />} />
        <Labeled label="Service Processed" value={<BooleanField source="service_processed" />} />
        <Labeled label="Is Not Published" value={<BooleanField source="is_not_published" />} />
        <Labeled label="Conf Item Id" value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Invoice Id" value={<ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Queue Item Id" value={<TextField source="queue_item_id" />} />
        <Labeled label="Order Id" value={<ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Full Project Name" value={<TextField source="full_project_name" />} />
        <Labeled label="Litter Id" value={<ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" value={<TextField source="pet_id" />} />
        <Labeled label="Is Template" value={<BooleanField source="is_template" />} />
        <Labeled label="Owner Role Id" value={<TextField source="owner_role_id" />} />
        <Labeled label="Remote Created On" value={<DateField source="remote_created_on" />} />
        <Labeled label="Competition Backup Id" value={<ReferenceField source="competition_backup_id" reference="competition_backup"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Competition Id" value={<ReferenceField source="competition_id" reference="competition"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Issue Type Id" value={<ReferenceField source="issue_type_id" reference="issue_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="User Quest Id" value={<ReferenceField source="user_quest_id" reference="user_quest"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Breed Id" value={<TextField source="pet_breed_id" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Activity",
        content: (
          <ReferenceManyField reference={"activity"} target={"activity_connection_id"} record={record} perPage={15}  pagination={<Pagination />}>
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
        label: "Pet In Activity",
        content: (
          <ReferenceManyField reference={"pet_in_activity"} target={"activity_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <ReferenceField source="award_id" reference="award"><TextField source="name" /></ReferenceField>
              <ReferenceField source="place_id" reference="place"><TextField source="name" /></ReferenceField>
              <ReferenceField source="qualification_id" reference="pet_qualification"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              <TextField source="pet_breed_id" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ,
        
      {
        label: "Activity Participant",
        content: (
          <ReferenceManyField reference={"activity_participant"} target={"activity_id"} record={record} perPage={15}  pagination={<Pagination />}>
            <Datagrid>
              <TextField source="id" />
              <TextField source="participant_id" />
              <TextField source="description" />
              <BooleanField source="read_mark" />
              <BooleanField source="invite_participant" />
            </Datagrid>
          </ReferenceManyField>
        ),
      }
          ]
    }
  />
);
