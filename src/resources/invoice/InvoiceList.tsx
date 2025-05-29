import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const InvoiceFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const InvoiceList = () => (
  <List filters={InvoiceFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="number" />
      <DateField source="start_date" />
      <NumberField source="primary_amount" />
      <NumberField source="primary_payment_amount" />
      <TextField source="payment_status_id" />
      <TextField source="owner_id" />
      <TextField source="supplier_billing_info_id" />
      <BooleanField source="remind_to_owner" />
      <DateField source="remind_to_owner_date" />
      <TextField source="customer_billing_info_id" />
      <TextField source="currency_id" />
      <NumberField source="currency_rate" />
      <NumberField source="amount" />
      <DateField source="due_date" />
      <NumberField source="payment_amount" />
      <TextField source="notes" />
      <TextField source="account_id" />
      <TextField source="contact_id" />
      <TextField source="supplier_id" />
      <TextField source="project_id" />
      <TextField source="order_id" />
      <NumberField source="amount_without_tax" />
      <NumberField source="primary_amount_without_tax" />
      <NumberField source="payment_amount_without_tax" />
      <NumberField source="primary_payment_amount_without_tax" />
      <TextField source="breed_id" />
      <BooleanField source="created_from_order" />
    </Datagrid>
  </List>
);
