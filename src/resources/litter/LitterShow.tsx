// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const LitterShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Father Id" required={false} value={<TextField source="father_id" />} />
        <Labeled label="Mother Id" required={false} value={<TextField source="mother_id" />} />
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Mating Period Id" required={false} value={<ReferenceField source="mating_period_id" reference="period"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date Of Birth" required={false} value={<DateField source="date_of_birth" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="litter_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Kennel Id" required={false} value={<ReferenceField source="kennel_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breeder Id" required={false} value={<TextField source="breeder_id" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Letter Id" required={false} value={<ReferenceField source="letter_id" reference="letter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Male Amount" required={false} value={<NumberField source="male_amount" />} />
        <Labeled label="Female Amount" required={false} value={<NumberField source="female_amount" />} />
        <Labeled label="Is Public" required={false} value={<BooleanField source="is_public" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="End Date" required={false} value={<DateField source="end_date" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="activity" fkField="litter_id" />
        </div>
        <ReferenceManyField reference="activity" target="litter_id" record={record} perPage={15}  pagination={<Pagination />}>
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
    label: "Post Feed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="post_feed" fkField="litter_id" />
        </div>
        <ReferenceManyField reference="post_feed" target="litter_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Note",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="note" fkField="litter_id" />
        </div>
        <ReferenceManyField reference="note" target="litter_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup" label="Entity Schema Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Service In Litter",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_service_in_litter" fkField="litter_id" />
        </div>
        <ReferenceManyField reference="pet_service_in_litter" target="litter_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <DateField source="date" label="Date" />
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="price" label="Price" />
              <ReferenceField source="service_type_id" reference="pet_service_type" label="Service Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_service_status_id" reference="pet_service_status" label="Pet Service Status Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Cover In Litter",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cover_in_litter" fkField="litter_id" />
        </div>
        <ReferenceManyField reference="cover_in_litter" target="litter_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <DateField source="setup_date" label="Setup Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet" fkField="litter_id" />
        </div>
        <ReferenceManyField reference="pet" target="litter_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <DateField source="date_of_birth" label="Date Of Birth" />
              <ReferenceField source="owner_id" reference="contact" label="Owner Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="kennel_id" reference="account" label="Kennel Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="sex_id" reference="sex" label="Sex Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="father_id" reference="pet" label="Father Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="mother_id" reference="pet_manchester_terrier_toy" label="Mother Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" label="Breeder Id" />
              <TextField source="photo_id" label="Photo Id" />
              <DateField source="date_of_death" label="Date Of Death" />
              <ReferenceField source="pet_status_id" reference="pet_status" label="Pet Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_type_id" reference="coat_type" label="Coat Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_color_id" reference="coat_color" label="Coat Color Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="size_id" reference="pet_size" label="Size Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="body_feature_id" reference="body_feature" label="Body Feature Id"><TextField source="name" /></ReferenceField>
              <TextField source="call_name" label="Call Name" />
              <ReferenceField source="country_of_birth_id" reference="country" label="Country Of Birth Id"><TextField source="name" /></ReferenceField>
              <TextField source="titles" label="Titles" />
              <NumberField source="inbreeding_percent" label="Inbreeding Percent" />
              <TextField source="url" label="Url" />
              <TextField source="page_template_code" label="Page Template Code" />
              <ReferenceField source="verified_stage_id" reference="verified_stage" label="Verified Stage Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="owner_kennel_id" reference="account" label="Owner Kennel Id"><TextField source="name" /></ReferenceField>
              <TextField source="full_breed_name" label="Full Breed Name" />
              <TextField source="avatar_url" label="Avatar Url" />
              <ReferenceField source="breed_division_id" reference="breed_division" label="Breed Division Id"><TextField source="name" /></ReferenceField>
              <TextField source="trim_titles" label="Trim Titles" />
              <ReferenceField source="country_of_stay_id" reference="country" label="Country Of Stay Id"><TextField source="name" /></ReferenceField>
              <DateField source="calc_date_of_birth" label="Calc Date Of Birth" />
              <NumberField source="coi" label="Coi" />
              <ReferenceField source="verification_status_id" reference="verification_status" label="Verification Status Id"><TextField source="name" /></ReferenceField>
              <NumberField source="rating_placement_in_breed" label="Rating Placement In Breed" />
              <BooleanField source="is_public" label="Is Public" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id"><TextField source="name" /></ReferenceField>
              <NumberField source="weight" label="Weight" />
              <NumberField source="test_int_index" label="Test Int Index" />
              <ReferenceField source="mother_breed_id" reference="pet_manchester_terrier_toy" label="Mother Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="father_breed_id" reference="pet" label="Father Breed Id"><TextField source="name" /></ReferenceField>
              <PrettyJsonField source="measurements" label="Measurements" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
