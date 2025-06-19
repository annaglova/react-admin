// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";


export const InvoiceShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      null
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Number" required={false} value={<TextField source="number" />} />
        <Labeled label="Start Date" required={false} value={<DateField source="start_date" />} />
        <Labeled label="Primary Amount" required={false} value={<NumberField source="primary_amount" />} />
        <Labeled label="Primary Payment Amount" required={false} value={<NumberField source="primary_payment_amount" />} />
        <Labeled label="Payment Status Id" required={false} value={<ReferenceField source="payment_status_id" reference="invoice_payment_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" required={false} value={<TextField source="owner_id" />} />
        <Labeled label="Supplier Billing Info Id" required={false} value={<ReferenceField source="supplier_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Remind To Owner" required={false} value={<BooleanField source="remind_to_owner" />} />
        <Labeled label="Remind To Owner Date" required={false} value={<DateField source="remind_to_owner_date" />} />
        <Labeled label="Customer Billing Info Id" required={false} value={<ReferenceField source="customer_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Id" required={false} value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Rate" required={false} value={<NumberField source="currency_rate" />} />
        <Labeled label="Amount" required={false} value={<NumberField source="amount" />} />
        <Labeled label="Due Date" required={false} value={<DateField source="due_date" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Payment Amount" required={false} value={<NumberField source="payment_amount" />} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" required={false} value={<TextField source="contact_id" />} />
        <Labeled label="Supplier Id" required={false} value={<ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" required={false} value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Order Id" required={false} value={<ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Amount Without Tax" required={false} value={<NumberField source="amount_without_tax" />} />
        <Labeled label="Primary Amount Without Tax" required={false} value={<NumberField source="primary_amount_without_tax" />} />
        <Labeled label="Payment Amount Without Tax" required={false} value={<NumberField source="payment_amount_without_tax" />} />
        <Labeled label="Primary Payment Amount Without Tax" required={false} value={<NumberField source="primary_payment_amount_without_tax" />} />
        <Labeled label="Breed Id" required={false} value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Created From Order" required={false} value={<BooleanField source="created_from_order" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Activity",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="activity" fkField="invoice_id" />
        </div>
        <ReferenceManyField reference="activity" target="invoice_id" record={record} perPage={15}  pagination={<Pagination />}>
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
              <ReferenceField source="user_quest_id" reference="user_quest" label="User Quest Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Payment In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="payment_in_breed" fkField="invoice_id" />
        </div>
        <ReferenceManyField reference="payment_in_breed" target="invoice_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="amount" label="Amount" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed" label="Breed Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Cashflow",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cashflow" fkField="invoice_id" />
        </div>
        <ReferenceManyField reference="cashflow" target="invoice_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="number" label="Number" />
              <ReferenceField source="type_id" reference="cashflow_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="details" label="Details" />
              <ReferenceField source="category_id" reference="cashflow_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="cashflow_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" label="Currency Rate" />
              <NumberField source="amount" label="Amount" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="income_fin_account_id" reference="fin_account" label="Income Fin Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="outcome_fin_account_id" reference="fin_account" label="Outcome Fin Account Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Invoice Product",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="invoice_product" fkField="invoice_id" />
        </div>
        <ReferenceManyField reference="invoice_product" target="invoice_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="product_id" reference="product" label="Product Id"><TextField source="name" /></ReferenceField>
              <TextField source="custom_product" label="Custom Product" />
              <DateField source="delivery_date" label="Delivery Date" />
              <NumberField source="quantity" label="Quantity" />
              <ReferenceField source="unit_id" reference="unit" label="Unit Id"><TextField source="name" /></ReferenceField>
              <NumberField source="primary_price" label="Primary Price" />
              <NumberField source="price" label="Price" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <NumberField source="amount" label="Amount" />
              <NumberField source="primary_discount_amount" label="Primary Discount Amount" />
              <NumberField source="discount_amount" label="Discount Amount" />
              <NumberField source="discount_percent" label="Discount Percent" />
              <NumberField source="primary_tax_amount" label="Primary Tax Amount" />
              <NumberField source="tax_amount" label="Tax Amount" />
              <NumberField source="primary_total_amount" label="Primary Total Amount" />
              <NumberField source="total_amount" label="Total Amount" />
              <NumberField source="discount_tax" label="Discount Tax" />
              <NumberField source="base_quantity" label="Base Quantity" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "License Manager",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="license_manager" fkField="invoice_id" />
        </div>
        <ReferenceManyField reference="license_manager" target="invoice_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="product_id" reference="product" label="Product Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="license_manager_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="delivery_date" label="Delivery Date" />
              <DateField source="estimated_date" label="Estimated Date" />
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="type_id" reference="license_manager_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="manage_type_id" reference="license_manager_manage_type" label="Manage Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
