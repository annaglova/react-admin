import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const OrderFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderList = () => (
  <List filters={OrderFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="number" label="Number" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
  <TextField source="name" />
</ReferenceField>
      <DateField source="date" label="Date" />
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="status_id" reference="order_status" label="Status Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="payment_status_id" reference="order_payment_status" label="Payment Status Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="delivery_status_id" reference="order_delivery_status" label="Delivery Status Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="contact_id" label="Contact Id" />
      <DateField source="due_date" label="Due Date" />
      <DateField source="actual_date" label="Actual Date" />
      <ReferenceField source="currency_id" reference="currency" label="Currency Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="currency_rate" label="Currency Rate" />
      <NumberField source="amount" label="Amount" />
      <NumberField source="payment_amount" label="Payment Amount" />
      <NumberField source="primary_amount" label="Primary Amount" />
      <NumberField source="primary_payment_amount" label="Primary Payment Amount" />
      <TextField source="notes" label="Notes" />
      <TextField source="delivery_address" label="Delivery Address" />
      <ReferenceField source="payment_type_id" reference="payment_type" label="Payment Type Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="receiver_name" label="Receiver Name" />
      <TextField source="comment" label="Comment" />
      <TextField source="contact_number" label="Contact Number" />
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
  <TextField source="name" />
</ReferenceField>
      <BooleanField source="created_from_opps" label="Created From Opps" />
    </Datagrid>
  </List>
);
