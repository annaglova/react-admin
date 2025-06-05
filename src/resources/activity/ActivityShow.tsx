// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const ActivityShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Title" required={false} value={<TextField source="title" />} />
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="Due Date" required={false} value={<DateField source="due_date" />} />
        <Labeled label="Priority Id" required={false} value={<ReferenceField source="priority_id" reference="activity_priority"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Author Id" required={false} value={<TextField source="author_id" />} />
        <Labeled label="Remind To Author" required={false} value={<BooleanField source="remind_to_author" />} />
        <Labeled label="Remind To Author Date" required={false} value={<DateField source="remind_to_author_date" />} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Remind To Owner" required={false} value={<BooleanField source="remind_to_owner" />} />
        <Labeled label="Remind To Owner Date" required={false} value={<DateField source="remind_to_owner_date" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="activity_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Activity Category Id" required={false} value={<ReferenceField source="activity_category_id" reference="activity_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Show In Scheduler" required={false} value={<BooleanField source="show_in_scheduler" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="activity_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Result Id" required={false} value={<ReferenceField source="result_id" reference="activity_result"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Detailed Result" required={false} value={<TextField source="detailed_result" />} />
        <Labeled label="Time Zone Id" required={false} value={<ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Sender" required={false} value={<TextField source="sender" />} />
        <Labeled label="Recepient" required={false} value={<TextField source="recepient" />} />
        <Labeled label="Copy Recepient" required={false} value={<TextField source="copy_recepient" />} />
        <Labeled label="Blind Copy Recepient" required={false} value={<TextField source="blind_copy_recepient" />} />
        <Labeled label="Body" required={false} value={<TextField source="body" />} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Color" required={false} value={<TextField source="color" />} />
        <Labeled label="Send Date" required={false} value={<DateField source="send_date" />} />
        <Labeled label="Duration In Minutes" required={false} value={<NumberField source="duration_in_minutes" />} />
        <Labeled label="Error On Send" required={false} value={<TextField source="error_on_send" />} />
        <Labeled label="Duration In Mnutes And Hours" required={false} value={<TextField source="duration_in_mnutes_and_hours" />} />
        <Labeled label="Allowed Result" required={false} value={<TextField source="allowed_result" />} />
        <Labeled label="Created By Inv Crm" required={false} value={<BooleanField source="created_by_inv_crm" />} />
        <Labeled label="Is Html Body" required={false} value={<BooleanField source="is_html_body" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Mail Hash" required={false} value={<TextField source="mail_hash" />} />
        <Labeled label="Process Element Id" required={false} value={<TextField source="process_element_id" />} />
        <Labeled label="Global Activity Id" required={false} value={<TextField source="global_activity_id" />} />
        <Labeled label="Is Need Process" required={false} value={<BooleanField source="is_need_process" />} />
        <Labeled label="Activity Connection Id" required={false} value={<ReferenceField source="activity_connection_id" reference="activity"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Organizer Id" required={false} value={<TextField source="organizer_id" />} />
        <Labeled label="Header Properties" required={false} value={<TextField source="header_properties" />} />
        <Labeled label="Is Auto Submitted" required={false} value={<BooleanField source="is_auto_submitted" />} />
        <Labeled label="Sender Contact Id" required={false} value={<TextField source="sender_contact_id" />} />
        <Labeled label="Preview" required={false} value={<TextField source="preview" />} />
        <Labeled label="User Email Address" required={false} value={<TextField source="user_email_address" />} />
        <Labeled label="Location" required={false} value={<TextField source="location" />} />
        <Labeled label="Enrich Status" required={false} value={<TextField source="enrich_status" />} />
        <Labeled label="Service Processed" required={false} value={<BooleanField source="service_processed" />} />
        <Labeled label="Is Not Published" required={false} value={<BooleanField source="is_not_published" />} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Invoice Id" required={false} value={<ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Event Id" required={false} value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Queue Item Id" required={false} value={<TextField source="queue_item_id" />} />
        <Labeled label="Order Id" required={false} value={<ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" required={false} value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Full Project Name" required={false} value={<TextField source="full_project_name" />} />
        <Labeled label="Litter Id" required={false} value={<ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Id" required={false} value={<TextField source="pet_id" />} />
        <Labeled label="Is Template" required={false} value={<BooleanField source="is_template" />} />
        <Labeled label="Owner Role Id" required={false} value={<TextField source="owner_role_id" />} />
        <Labeled label="Remote Created On" required={false} value={<DateField source="remote_created_on" />} />
        <Labeled label="Competition Backup Id" required={false} value={<ReferenceField source="competition_backup_id" reference="competition_backup"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Competition Id" required={false} value={<ReferenceField source="competition_id" reference="competition"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Issue Type Id" required={false} value={<ReferenceField source="issue_type_id" reference="issue_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="User Quest Id" required={false} value={<ReferenceField source="user_quest_id" reference="user_quest"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Breed Id" required={false} value={<TextField source="pet_breed_id" />} />
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
        <ReferenceManyField reference="activity" target="activity_connection_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
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
    label: "Pet In Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="pet_in_activity" />
        </div>
        <ReferenceManyField reference="pet_in_activity" target="activity_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="award_id" reference="award" label="Award Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="place_id" reference="place" label="Place Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="qualification_id" reference="pet_qualification" label="Qualification Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
              <TextField source="pet_breed_id" label="Pet Breed Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Activity Participant",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <CreateButton resource="activity_participant" />
        </div>
        <ReferenceManyField reference="activity_participant" target="activity_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="participant_id" label="Participant Id" />
              <TextField source="description" label="Description" />
              <BooleanField source="read_mark" label="Read Mark" />
              <BooleanField source="invite_participant" label="Invite Participant" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
