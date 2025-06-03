// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const OrderShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Number" value={<TextField source="number" />} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date" value={<DateField source="date" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="order_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Payment Status Id" value={<ReferenceField source="payment_status_id" reference="order_payment_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Delivery Status Id" value={<ReferenceField source="delivery_status_id" reference="order_delivery_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Due Date" value={<DateField source="due_date" />} />
        <Labeled label="Actual Date" value={<DateField source="actual_date" />} />
        <Labeled label="Currency Id" value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Rate" value={<NumberField source="currency_rate" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Amount" value={<NumberField source="amount" />} />
        <Labeled label="Payment Amount" value={<NumberField source="payment_amount" />} />
        <Labeled label="Primary Amount" value={<NumberField source="primary_amount" />} />
        <Labeled label="Primary Payment Amount" value={<NumberField source="primary_payment_amount" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Delivery Address" value={<TextField source="delivery_address" />} />
        <Labeled label="Payment Type Id" value={<ReferenceField source="payment_type_id" reference="payment_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Receiver Name" value={<TextField source="receiver_name" />} />
        <Labeled label="Comment" value={<TextField source="comment" />} />
        <Labeled label="Contact Number" value={<TextField source="contact_number" />} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Created From Opps" value={<BooleanField source="created_from_opps" />} />
      </>
    }
    detailsConfigs={
      [
      {
        label: "Activity",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"activity"} target={"order_id"} record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="activity_connection_id" reference="activity"><TextField source="name" /></ReferenceField>
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
          </>
        ),
      }
  ,
        
      {
        label: "Invoice",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"invoice"} target={"order_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="number" />
              <DateField source="start_date" />
              <NumberField source="primary_amount" />
              <NumberField source="primary_payment_amount" />
              <ReferenceField source="payment_status_id" reference="invoice_payment_status"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="supplier_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>
              <BooleanField source="remind_to_owner" />
              <DateField source="remind_to_owner_date" />
              <ReferenceField source="customer_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" />
              <NumberField source="amount" />
              <DateField source="due_date" />
              <NumberField source="payment_amount" />
              <TextField source="notes" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <NumberField source="amount_without_tax" />
              <NumberField source="primary_amount_without_tax" />
              <NumberField source="payment_amount_without_tax" />
              <NumberField source="primary_payment_amount_without_tax" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <BooleanField source="created_from_order" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
