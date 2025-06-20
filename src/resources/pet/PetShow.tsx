// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";
import { PrettyJsonField } from "@/components/PrettyJsonField";


export const PetShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Date Of Birth" required={false} value={<DateField source="date_of_birth" />} />
        <Labeled label="Owner Id" required={false} value={<ReferenceField source="owner_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Kennel Id" required={false} value={<ReferenceField source="kennel_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Sex Id" required={false} value={<ReferenceField source="sex_id" reference="sex"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Father Id" required={false} value={<ReferenceField source="father_id" reference="pet"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Mother Id" required={false} value={<ReferenceField source="mother_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breeder Id" required={false} value={<TextField source="breeder_id" />} />
        <Labeled label="Photo Id" required={false} value={<TextField source="photo_id" />} />
        <Labeled label="Date Of Death" required={false} value={<DateField source="date_of_death" />} />
        <Labeled label="Pet Status Id" required={false} value={<ReferenceField source="pet_status_id" reference="pet_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Coat Type Id" required={false} value={<ReferenceField source="coat_type_id" reference="coat_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Coat Color Id" required={false} value={<ReferenceField source="coat_color_id" reference="coat_color"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Size Id" required={false} value={<ReferenceField source="size_id" reference="pet_size"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Body Feature Id" required={false} value={<ReferenceField source="body_feature_id" reference="body_feature"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Litter Id" required={false} value={<ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Call Name" required={false} value={<TextField source="call_name" />} />
        <Labeled label="Country Of Birth Id" required={false} value={<ReferenceField source="country_of_birth_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Titles" required={false} value={<TextField source="titles" />} />
        <Labeled label="Inbreeding Percent" required={false} value={<NumberField source="inbreeding_percent" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Page Template Code" required={false} value={<TextField source="page_template_code" />} />
        <Labeled label="Verified Stage Id" required={false} value={<ReferenceField source="verified_stage_id" reference="verified_stage"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Kennel Id" required={false} value={<ReferenceField source="owner_kennel_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Full Breed Name" required={false} value={<TextField source="full_breed_name" />} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Breed Division Id" required={false} value={<ReferenceField source="breed_division_id" reference="breed_division"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Trim Titles" required={false} value={<TextField source="trim_titles" />} />
        <Labeled label="Country Of Stay Id" required={false} value={<ReferenceField source="country_of_stay_id" reference="country"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Calc Date Of Birth" required={false} value={<DateField source="calc_date_of_birth" />} />
        <Labeled label="Coi" required={false} value={<NumberField source="coi" />} />
        <Labeled label="Verification Status Id" required={false} value={<ReferenceField source="verification_status_id" reference="verification_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Rating Placement In Breed" required={false} value={<NumberField source="rating_placement_in_breed" />} />
        <Labeled label="Is Public" required={false} value={<BooleanField source="is_public" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Public Data Id" required={false} value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Weight" required={false} value={<NumberField source="weight" />} />
        <Labeled label="Test Int Index" required={false} value={<NumberField source="test_int_index" />} />
        <Labeled label="Mother Breed Id" required={false} value={<ReferenceField source="mother_breed_id" reference="pet_manchester_terrier_toy"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Father Breed Id" required={false} value={<ReferenceField source="father_breed_id" reference="pet"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Measurements" value={<PrettyJsonField source="measurements" label="Measurements" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Producer Card",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="producer_card" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="producer_card" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="pet_lifecycle_event_id" reference="pet_lifecycle_event" label="Pet Lifecycle Event Id"><TextField source="name" /></ReferenceField>
              <DateField source="datet" label="Datet" />
              <NumberField source="day" label="Day" />
              <TextField source="description" label="Description" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Service",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_service" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_service" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="service_type_id" reference="pet_service_type" label="Service Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="price" label="Price" />
              <ReferenceField source="pet_service_status_id" reference="pet_service_status" label="Pet Service Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Dna Marker In Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="dna_marker_in_pet" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="dna_marker_in_pet" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="value" label="Value" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="activity" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="activity" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <BooleanField source="is_template" label="Is Template" />
              <TextField source="owner_role_id" label="Owner Role Id" />
              <DateField source="remote_created_on" label="Remote Created On" />
              <ReferenceField source="competition_backup_id" reference="competition_backup" label="Competition Backup Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="competition_id" reference="competition" label="Competition Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="issue_type_id" reference="issue_type" label="Issue Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="user_quest_id" reference="user_quest" label="User Quest Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Product",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="product" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="product" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="code" label="Code" />
              <ReferenceField source="unit_id" reference="unit" label="Unit Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="price" label="Price" />
              <TextField source="url" label="Url" />
              <ReferenceField source="type_id" reference="product_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="active" label="Active" />
              <TextField source="owner_id" label="Owner Id" />
              <TextField source="description" label="Description" />
              <ReferenceField source="product_source_id" reference="product_source" label="Product Source Id"><TextField source="name" /></ReferenceField>
              <TextField source="notes" label="Notes" />
              <BooleanField source="is_archive" label="Is Archive" />
              <ReferenceField source="category_id" reference="product_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <TextField source="short_description" label="Short Description" />
              <TextField source="benefits" label="Benefits" />
              <TextField source="general_conditions" label="General Conditions" />
              <TextField source="stripe_product_id" label="Stripe Product Id" />
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
          <ChildCreateButton resource="pet_in_activity" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_in_activity" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="award_id" reference="award" label="Award Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="place_id" reference="place" label="Place Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="qualification_id" reference="pet_qualification" label="Qualification Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="activity_id" reference="activity" label="Activity Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Service Feature In Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_service_feature_in_pet" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_service_feature_in_pet" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="pet_service_feature_id" reference="pet_service_feature" label="Pet Service Feature Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_service_type_id" reference="pet_service_type" label="Pet Service Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Cover In Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cover_in_pet" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="cover_in_pet" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
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
    label: "Pet Lifecycle",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_lifecycle" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_lifecycle" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="day" label="Day" />
              <TextField source="description" label="Description" />
              <DateField source="date" label="Date" />
              <ReferenceField source="pet_lifecycle_event_id" reference="pet_lifecycle_event" label="Pet Lifecycle Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="pet_lifecycle_event_status" label="Status Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Title In Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="title_in_pet" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="title_in_pet" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <ReferenceField source="title_id" reference="title" label="Title Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="is_confirmed" label="Is Confirmed" />
              <DateField source="date" label="Date" />
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <TextField source="description" label="Description" />
              <NumberField source="amount" label="Amount" />
              <TextField source="raw_title" label="Raw Title" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet In Project",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_in_project" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_in_project" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <NumberField source="number" label="Number" />
              <ReferenceField source="class_id" reference="pet_class" label="Class Id"><TextField source="name" /></ReferenceField>
              <TextField source="web_link" label="Web Link" />
              <TextField source="result" label="Result" />
              <TextField source="code" label="Code" />
              <ReferenceField source="handler_id" reference="contact" label="Handler Id"><TextField source="name" /></ReferenceField>
              <TextField source="judge_id" label="Judge Id" />
              <ReferenceField source="place_id" reference="place" label="Place Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="qualification_id" reference="pet_qualification" label="Qualification Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
              <TextField source="temp_project_name" label="Temp Project Name" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Health Exam Result",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_health_exam_result" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_health_exam_result" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="health_exam_object_id" reference="health_exam_object" label="Health Exam Object Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="health_exam_result_id" reference="health_exam_result" label="Health Exam Result Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Measurement",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_measurement" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_measurement" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="value" label="Value" />
              <NumberField source="day" label="Day" />
              <DateField source="date" label="Date" />
              <ReferenceField source="measurement_type_id" reference="measurement_type" label="Measurement Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="unit_id" reference="unit" label="Unit Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="active_synchronization" label="Active Synchronization" />
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
          <ChildCreateButton resource="post_feed" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="post_feed" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
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
          <ChildCreateButton resource="note" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="note" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup" label="Entity Schema Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Note Test Record",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="note_test_record" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="note_test_record" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="note_id" reference="note" label="Note Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Additional Info",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_additional_info" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_additional_info" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="value" label="Value" />
              <ReferenceField source="type_id" reference="pet_additional_info_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="description" label="Description" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Public Data",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="public_data" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="public_data" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="hash_md5" label="Hash Md5" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <TextField source="model" label="Model" />
              <TextField source="entity_name" label="Entity Name" />
              <BooleanField source="primary" label="Primary" />
              <ReferenceField source="redirect_id" reference="public_data" label="Redirect Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_titles_id" reference="title_in_pet" label="Pet Titles Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_owner" label="Has Owner" />
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
          <ChildCreateButton resource="pet" fkField="mother_id" />
        </div>
        <ReferenceManyField reference="pet" target="mother_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <DateField source="date_of_birth" label="Date Of Birth" />
              <ReferenceField source="owner_id" reference="contact" label="Owner Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="kennel_id" reference="account" label="Kennel Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="sex_id" reference="sex" label="Sex Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" label="Breeder Id" />
              <TextField source="photo_id" label="Photo Id" />
              <DateField source="date_of_death" label="Date Of Death" />
              <ReferenceField source="pet_status_id" reference="pet_status" label="Pet Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_type_id" reference="coat_type" label="Coat Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_color_id" reference="coat_color" label="Coat Color Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="size_id" reference="pet_size" label="Size Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="body_feature_id" reference="body_feature" label="Body Feature Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
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
              <PrettyJsonField source="measurements" label="Measurements" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Pedigree Cycle",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_pedigree_cycle" fkField="pet_id" />
        </div>
        <ReferenceManyField reference="pet_pedigree_cycle" target="pet_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="position" label="Position" />
              <TextField source="group_id" label="Group Id" />
              <ReferenceField source="member_type_id" reference="pet_pedigree_cycle_member_type" label="Member Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_member_id" label="Pet Member Id" />
              <TextField source="pet_root_id" label="Pet Root Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
