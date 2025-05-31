// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
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
  />
);
