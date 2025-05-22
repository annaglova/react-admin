import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const OrderFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const OrderList = () => (
  <List filters={OrderFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <TextField source="number" />
      <ReferenceField source="account_id" reference="accounts" />
      <DateField source="date" />
      <ReferenceField source="owner_id" reference="owners" />
      <ReferenceField source="status_id" reference="statuses" />
      <ReferenceField source="payment_status_id" reference="payment_statuses" />
      <ReferenceField
        source="delivery_status_id"
        reference="delivery_statuses"
      />
      <ReferenceField source="contact_id" reference="contacts" />
      <TextField source="due_date" />
      <TextField source="actual_date" />
      <ReferenceField source="currency_id" reference="currencies" />
      <NumberField source="currency_rate" />
      <DateField source="amount" />
      <DateField source="payment_amount" />
      <DateField source="primary_amount" />
      <DateField source="primary_payment_amount" />
      <DateField source="notes" />
      <TextField source="delivery_address" />
      <ReferenceField source="payment_type_id" reference="payment_types" />
      <TextField source="receiver_name" />
      <DateField source="comment" />
      <TextField source="contact_number" />
      <ReferenceField source="breed_id" reference="breeds" />
      <BooleanField source="created_from_opps" />
    </Datagrid>
  </List>
);
