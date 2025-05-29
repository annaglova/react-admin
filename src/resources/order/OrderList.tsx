import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const OrderFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderList = () => (
  <List filters={OrderFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="number" />
      <TextField source="account_id" />
      <DateField source="date" />
      <TextField source="owner_id" />
      <TextField source="status_id" />
      <TextField source="payment_status_id" />
      <TextField source="delivery_status_id" />
      <TextField source="contact_id" />
      <DateField source="due_date" />
      <DateField source="actual_date" />
      <TextField source="currency_id" />
      <NumberField source="currency_rate" />
      <NumberField source="amount" />
      <NumberField source="payment_amount" />
      <NumberField source="primary_amount" />
      <NumberField source="primary_payment_amount" />
      <TextField source="notes" />
      <TextField source="delivery_address" />
      <TextField source="payment_type_id" />
      <TextField source="receiver_name" />
      <TextField source="comment" />
      <TextField source="contact_number" />
      <TextField source="breed_id" />
      <BooleanField source="created_from_opps" />
    </Datagrid>
  </List>
);
