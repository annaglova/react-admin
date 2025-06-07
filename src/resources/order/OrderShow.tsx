// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";



export const OrderShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Number" required={false} value={<TextField source="number" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="order_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Payment Status Id" required={false} value={<ReferenceField source="payment_status_id" reference="order_payment_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Delivery Status Id" required={false} value={<ReferenceField source="delivery_status_id" reference="order_delivery_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Due Date" required={false} value={<DateField source="due_date" />} />
        <Labeled label="Actual Date" required={false} value={<DateField source="actual_date" />} />
        <Labeled label="Currency Id" required={false} value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Rate" required={false} value={<NumberField source="currency_rate" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Amount" required={false} value={<NumberField source="amount" />} />
        <Labeled label="Payment Amount" required={false} value={<NumberField source="payment_amount" />} />
        <Labeled label="Primary Amount" required={false} value={<NumberField source="primary_amount" />} />
        <Labeled label="Primary Payment Amount" required={false} value={<NumberField source="primary_payment_amount" />} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Delivery Address" required={false} value={<TextField source="delivery_address" />} />
        <Labeled label="Payment Type Id" required={false} value={<ReferenceField source="payment_type_id" reference="payment_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Receiver Name" required={false} value={<TextField source="receiver_name" />} />
        <Labeled label="Comment" required={false} value={<TextField source="comment" />} />
        <Labeled label="Contact Number" required={false} value={<TextField source="contact_number" />} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Created From Opps" required={false} value={<BooleanField source="created_from_opps" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="activity" fkField="order_id" />
        </div>
        <ReferenceManyField reference="activity" target="order_id" record={record} perPage={15}  pagination={<Pagination />}>
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
    label: "Invoice",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="invoice" fkField="order_id" />
        </div>
        <ReferenceManyField reference="invoice" target="order_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="number" label="Number" />
              <DateField source="start_date" label="Start Date" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <NumberField source="primary_payment_amount" label="Primary Payment Amount" />
              <ReferenceField source="payment_status_id" reference="invoice_payment_status" label="Payment Status Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="supplier_billing_info_id" reference="account_billing_info" label="Supplier Billing Info Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="remind_to_owner" label="Remind To Owner" />
              <DateField source="remind_to_owner_date" label="Remind To Owner Date" />
              <ReferenceField source="customer_billing_info_id" reference="account_billing_info" label="Customer Billing Info Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" label="Currency Rate" />
              <NumberField source="amount" label="Amount" />
              <DateField source="due_date" label="Due Date" />
              <NumberField source="payment_amount" label="Payment Amount" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="supplier_id" reference="account" label="Supplier Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <NumberField source="amount_without_tax" label="Amount Without Tax" />
              <NumberField source="primary_amount_without_tax" label="Primary Amount Without Tax" />
              <NumberField source="payment_amount_without_tax" label="Payment Amount Without Tax" />
              <NumberField source="primary_payment_amount_without_tax" label="Primary Payment Amount Without Tax" />
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="created_from_order" label="Created From Order" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
