// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const OrderShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Number" value={<TextField source="number" />} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date" value={<DateField source="date" />} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="order_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Payment Status Id" value={<ReferenceField source="payment_status_id" reference="order_payment_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Delivery Status Id" value={<ReferenceField source="delivery_status_id" reference="order_delivery_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" value={<TextField source="contact_id" />} />
        <Labeled label="Due Date" value={<DateField source="due_date" />} />
        <Labeled label="Actual Date" value={<DateField source="actual_date" />} />
        <Labeled label="Currency Id" value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Currency Rate" value={<NumberField source="currency_rate" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Amount" value={<NumberField source="amount" />} />
        <Labeled label="Payment Amount" value={<NumberField source="payment_amount" />} />
        <Labeled label="Primary Amount" value={<NumberField source="primary_amount" />} />
        <Labeled label="Primary Payment Amount" value={<NumberField source="primary_payment_amount" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Delivery Address" value={<TextField source="delivery_address" />} />
        <Labeled label="Payment Type Id" value={<ReferenceField source="payment_type_id" reference="payment_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Receiver Name" value={<TextField source="receiver_name" />} />
        <Labeled label="Comment" value={<TextField source="comment" />} />
        <Labeled label="Contact Number" value={<TextField source="contact_number" />} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Created From Opps" value={<BooleanField source="created_from_opps" />} />
      </>
    }
  />
);
