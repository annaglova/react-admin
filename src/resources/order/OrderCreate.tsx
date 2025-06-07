import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const OrderCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <TextInput source="number" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="date" validate={[]} />
          <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="status_id" reference="order_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="payment_status_id" reference="order_payment_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="delivery_status_id" reference="order_delivery_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="contact_id" validate={[]} />
          <DateInput source="due_date" validate={[]} />
          <DateInput source="actual_date" validate={[]} />
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="currency_rate" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="amount" validate={[]} />
          <NumberInput source="payment_amount" validate={[]} />
          <NumberInput source="primary_amount" validate={[]} />
          <NumberInput source="primary_payment_amount" validate={[]} />
          <TextInput source="notes" validate={[]} />
          <TextInput source="delivery_address" validate={[]} />
          <ReferenceInput source="payment_type_id" reference="payment_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="receiver_name" validate={[]} />
          <TextInput source="comment" validate={[]} />
          <TextInput source="contact_number" validate={[]} />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="created_from_opps" validate={[]} />
      </>
    }
  />
);
