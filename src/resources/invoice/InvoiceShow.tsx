import { BooleanField, DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const InvoiceShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="number" />
      <DateField source="start_date" />
      <NumberField source="primary_amount" />
      <NumberField source="primary_payment_amount" />
      <ReferenceField source="payment_status_id" reference="invoice_payment_status">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
      <ReferenceField source="supplier_billing_info_id" reference="account_billing_info">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="remind_to_owner" />
      <DateField source="remind_to_owner_date" />
      <ReferenceField source="customer_billing_info_id" reference="account_billing_info">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="currency_id" reference="currency">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="currency_rate" />
      <NumberField source="amount" />
      <DateField source="due_date" />
      <NumberField source="payment_amount" />
      <TextField source="notes" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="contact_id" />
      <ReferenceField source="supplier_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="order_id" reference="order">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="amount_without_tax" />
      <NumberField source="primary_amount_without_tax" />
      <NumberField source="payment_amount_without_tax" />
      <NumberField source="primary_payment_amount_without_tax" />
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="created_from_order" />
    </SimpleShowLayout>
  </Show>
);
