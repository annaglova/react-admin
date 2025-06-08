// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, DateField, NumberField, ReferenceField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { ChildResourceShowLayout } from "@/layouts/ChildResourceShowLayout";


export const InvoiceProductShow = ({ record }: any) => (
  <ChildResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Product Id" required={false} value={<ReferenceField source="product_id" reference="product"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Custom Product" required={false} value={<TextField source="custom_product" />} />
        <Labeled label="Delivery Date" required={false} value={<DateField source="delivery_date" />} />
        <Labeled label="Quantity" required={false} value={<NumberField source="quantity" />} />
        <Labeled label="Unit Id" required={false} value={<ReferenceField source="unit_id" reference="unit"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Primary Price" required={false} value={<NumberField source="primary_price" />} />
        <Labeled label="Price" required={false} value={<NumberField source="price" />} />
        <Labeled label="Primary Amount" required={false} value={<NumberField source="primary_amount" />} />
        <Labeled label="Amount" required={false} value={<NumberField source="amount" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Primary Discount Amount" required={false} value={<NumberField source="primary_discount_amount" />} />
        <Labeled label="Discount Amount" required={false} value={<NumberField source="discount_amount" />} />
        <Labeled label="Discount Percent" required={false} value={<NumberField source="discount_percent" />} />
        <Labeled label="Primary Tax Amount" required={false} value={<NumberField source="primary_tax_amount" />} />
        <Labeled label="Tax Amount" required={false} value={<NumberField source="tax_amount" />} />
        <Labeled label="Primary Total Amount" required={false} value={<NumberField source="primary_total_amount" />} />
        <Labeled label="Total Amount" required={false} value={<NumberField source="total_amount" />} />
        <Labeled label="Discount Tax" required={false} value={<NumberField source="discount_tax" />} />
        <Labeled label="Invoice Id" required={false} value={<ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Base Quantity" required={false} value={<NumberField source="base_quantity" />} />
      </>
    }
  />
);
