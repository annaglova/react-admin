import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const InvoiceCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="number" validate={[]} />
          <DateInput source="start_date" validate={[]} />
          <NumberInput source="primary_amount" validate={[]} />
          <NumberInput source="primary_payment_amount" validate={[]} />
          <ReferenceInput source="payment_status_id" reference="invoice_payment_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="supplier_billing_info_id" reference="account_billing_info">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="remind_to_owner" validate={[]} />
          <DateInput source="remind_to_owner_date" validate={[]} />
          <ReferenceInput source="customer_billing_info_id" reference="account_billing_info">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="currency_rate" validate={[]} />
          <NumberInput source="amount" validate={[]} />
          <DateInput source="due_date" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="payment_amount" validate={[]} />
          <TextInput source="notes" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="contact_id" validate={[]} />
          <ReferenceInput source="supplier_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="order_id" reference="order">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="amount_without_tax" validate={[]} />
          <NumberInput source="primary_amount_without_tax" validate={[]} />
          <NumberInput source="payment_amount_without_tax" validate={[]} />
          <NumberInput source="primary_payment_amount_without_tax" validate={[]} />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="created_from_order" validate={[]} />
      </>
    }
  />
);
