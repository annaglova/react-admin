import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const InvoiceFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const InvoiceList = () => (
  <List filters={InvoiceFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="number" label="Number" />
      <DateField source="start_date" label="Start Date" />
      <NumberField source="primary_amount" label="Primary Amount" />
      <NumberField source="primary_payment_amount" label="Primary Payment Amount" />
      <ReferenceField source="payment_status_id" reference="invoice_payment_status" label="Payment Status Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="supplier_billing_info_id" reference="account_billing_info" label="Supplier Billing Info Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="remind_to_owner" label="Remind To Owner" />
      <DateField source="remind_to_owner_date" label="Remind To Owner Date" />
      <ReferenceField source="customer_billing_info_id" reference="account_billing_info" label="Customer Billing Info Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="currency_id" reference="currency" label="Currency Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="currency_rate" label="Currency Rate" />
      <NumberField source="amount" label="Amount" />
      <DateField source="due_date" label="Due Date" />
      <NumberField source="payment_amount" label="Payment Amount" />
      <TextField source="notes" label="Notes" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="contact_id" label="Contact Id" />
      <ReferenceField source="supplier_id" reference="account" label="Supplier Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="project_id" reference="project" label="Project Id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="order_id" reference="order" label="Order Id">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="amount_without_tax" label="Amount Without Tax" />
      <NumberField source="primary_amount_without_tax" label="Primary Amount Without Tax" />
      <NumberField source="payment_amount_without_tax" label="Payment Amount Without Tax" />
      <NumberField source="primary_payment_amount_without_tax" label="Primary Payment Amount Without Tax" />
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="created_from_order" label="Created From Order" />
    </Datagrid>
  </List>
);
