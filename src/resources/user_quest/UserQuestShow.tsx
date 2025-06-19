// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const UserQuestShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Finish Date" required={false} value={<DateField source="finish_date" />} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Deadline Date" required={false} value={<DateField source="deadline_date" />} />
        <Labeled label="Deactivated" required={false} value={<BooleanField source="deactivated" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Reward" required={false} value={<NumberField source="reward" />} />
        <Labeled label="Description" required={false} value={<TextField source="description" />} />
        <Labeled label="Frequency Interval" required={false} value={<NumberField source="frequency_interval" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="activity" fkField="user_quest_id" />
        </div>
        <ReferenceManyField reference="activity" target="user_quest_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "User Quest Step",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="user_quest_step" fkField="user_quest_id" />
        </div>
        <ReferenceManyField reference="user_quest_step" target="user_quest_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="description" label="Description" />
              <TextField source="intitial_provider_code" label="Intitial Provider Code" />
              <TextField source="provider_code" label="Provider Code" />
              <NumberField source="position" label="Position" />
              <DateField source="finish_date" label="Finish Date" />
              <TextField source="output" label="Output" />
              <TextField source="input" label="Input" />
              <TextField source="dependencies" label="Dependencies" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "User Quest Stage",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="user_quest_stage" fkField="user_quest_id" />
        </div>
        <ReferenceManyField reference="user_quest_stage" target="user_quest_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="title" label="Title" />
              <TextField source="output" label="Output" />
              <TextField source="input" label="Input" />
              <DateField source="finish_date" label="Finish Date" />
              <ReferenceField source="stage_id" reference="quest_stage" label="Stage Id"><TextField source="name" /></ReferenceField>
              <NumberField source="order" label="Order" />
              <TextField source="description" label="Description" />
              <TextField source="business_process_id" label="Business Process Id" />
              <TextField source="code" label="Code" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
