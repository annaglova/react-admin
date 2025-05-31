import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const OrderEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="number" />
      <ReferenceInput source="account_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="date" />
      <TextInput source="owner_id" />
      <ReferenceInput source="status_id" reference="order_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="payment_status_id" reference="order_payment_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="delivery_status_id" reference="order_delivery_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="contact_id" />
      <DateInput source="due_date" />
      <DateInput source="actual_date" />
      <ReferenceInput source="currency_id" reference="currency">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="currency_rate" />
      <NumberInput source="amount" />
      <NumberInput source="payment_amount" />
      <NumberInput source="primary_amount" />
      <NumberInput source="primary_payment_amount" />
      <TextInput source="notes" />
      <TextInput source="delivery_address" />
      <ReferenceInput source="payment_type_id" reference="payment_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="receiver_name" />
      <TextInput source="comment" />
      <TextInput source="contact_number" />
      <ReferenceInput source="breed_id" reference="breed">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="created_from_opps" />
    </SimpleForm>
  </Edit>
);
