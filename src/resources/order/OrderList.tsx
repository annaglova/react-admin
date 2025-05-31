import { BooleanField, Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const OrderFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderList = () => (
  <List filters={OrderFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="number" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="date" />
      <TextField source="owner_id" />
      <ReferenceField source="status_id" reference="order_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="payment_status_id" reference="order_payment_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="delivery_status_id" reference="order_delivery_status">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="contact_id" />
      <DateField source="due_date" />
      <DateField source="actual_date" />
      <ReferenceField source="currency_id" reference="currency">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="currency_rate" />
      <NumberField source="amount" />
      <NumberField source="payment_amount" />
      <NumberField source="primary_amount" />
      <NumberField source="primary_payment_amount" />
      <TextField source="notes" />
      <TextField source="delivery_address" />
      <ReferenceField source="payment_type_id" reference="payment_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="receiver_name" />
      <TextField source="comment" />
      <TextField source="contact_number" />
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="created_from_opps" />
    </Datagrid>
  </List>
);
