// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const InvoiceShow = ({ record }: any) => (
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
        <Labeled label="Start Date" value={<DateField source="start_date" />} />
        <Labeled label="Primary Amount" value={<NumberField source="primary_amount" />} />
        <Labeled label="Primary Payment Amount" value={<NumberField source="primary_payment_amount" />} />
        <Labeled label="Payment Status Id" value={<ReferenceField source="payment_status_id" reference="invoice_payment_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Supplier Billing Info Id" value={<ReferenceField source="supplier_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Remind To Owner" value={<BooleanField source="remind_to_owner" />} />
        <Labeled label="Remind To Owner Date" value={<DateField source="remind_to_owner_date" />} />
        <Labeled label="Customer Billing Info Id" value={<ReferenceField source="customer_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Id" value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Rate" value={<NumberField source="currency_rate" />} />
        <Labeled label="Amount" value={<NumberField source="amount" />} />
        <Labeled label="Due Date" value={<DateField source="due_date" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Payment Amount" value={<NumberField source="payment_amount" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Supplier Id" value={<ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Id" value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Order Id" value={<ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Amount Without Tax" value={<NumberField source="amount_without_tax" />} />
        <Labeled label="Primary Amount Without Tax" value={<NumberField source="primary_amount_without_tax" />} />
        <Labeled label="Payment Amount Without Tax" value={<NumberField source="payment_amount_without_tax" />} />
        <Labeled label="Primary Payment Amount Without Tax" value={<NumberField source="primary_payment_amount_without_tax" />} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Created From Order" value={<BooleanField source="created_from_order" />} />
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
            <ReferenceManyField reference={"activity"} target={"invoice_id"} record={record} perPage={15}  pagination={<Pagination />}>
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
          </>
        ),
      }
  ,
        
      {
        label: "Cashflow",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"cashflow"} target={"invoice_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>
              <TextField source="number" />
              <ReferenceField source="type_id" reference="cashflow_type"><TextField source="name" /></ReferenceField>
              <TextField source="details" />
              <ReferenceField source="category_id" reference="cashflow_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="cashflow_status"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" />
              <NumberField source="amount" />
              <NumberField source="primary_amount" />
              <TextField source="notes" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="income_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="outcome_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"invoice_product"} target={"invoice_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>
              <TextField source="custom_product" />
              <DateField source="delivery_date" />
              <NumberField source="quantity" />
              <ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>
              <NumberField source="primary_price" />
              <NumberField source="price" />
              <NumberField source="primary_amount" />
              <NumberField source="amount" />
              <NumberField source="primary_discount_amount" />
              <NumberField source="discount_amount" />
              <NumberField source="discount_percent" />
              <NumberField source="primary_tax_amount" />
              <NumberField source="tax_amount" />
              <NumberField source="primary_total_amount" />
              <NumberField source="total_amount" />
              <NumberField source="discount_tax" />
              <NumberField source="base_quantity" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"license_manager"} target={"invoice_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="contact_id" />
              <ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="license_manager_status"><TextField source="name" /></ReferenceField>
              <DateField source="delivery_date" />
              <DateField source="estimated_date" />
              <TextField source="owner_id" />
              <ReferenceField source="type_id" reference="license_manager_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="manage_type_id" reference="license_manager_manage_type"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"payment_in_breed"} target={"invoice_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <NumberField source="amount" />
              <TextField source="contact_id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
