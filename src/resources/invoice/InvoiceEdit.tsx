import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const InvoiceEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="number" />
          <DateInput source="start_date" />
          <NumberInput source="primary_amount" />
          <NumberInput source="primary_payment_amount" />
          <ReferenceInput source="payment_status_id" reference="invoice_payment_status">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="owner_id" />
          <ReferenceInput source="supplier_billing_info_id" reference="account_billing_info">
  <SelectInput optionText="name" />
</ReferenceInput>
          <BooleanInput source="remind_to_owner" />
          <DateInput source="remind_to_owner_date" />
          <ReferenceInput source="customer_billing_info_id" reference="account_billing_info">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" />
</ReferenceInput>
          <NumberInput source="currency_rate" />
          <NumberInput source="amount" />
          <DateInput source="due_date" />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="payment_amount" />
          <TextInput source="notes" />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="contact_id" />
          <ReferenceInput source="supplier_id" reference="account">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="order_id" reference="order">
  <SelectInput optionText="name" />
</ReferenceInput>
          <NumberInput source="amount_without_tax" />
          <NumberInput source="primary_amount_without_tax" />
          <NumberInput source="payment_amount_without_tax" />
          <NumberInput source="primary_payment_amount_without_tax" />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" />
</ReferenceInput>
          <BooleanInput source="created_from_order" />
      </>
    }
  />
);
