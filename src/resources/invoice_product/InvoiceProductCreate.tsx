import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const InvoiceProductCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <ReferenceInput source="product_id" reference="product">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="custom_product" validate={[]} />
          <DateInput source="delivery_date" validate={[]} />
          <NumberInput source="quantity" validate={[]} />
          <ReferenceInput source="unit_id" reference="unit">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="primary_price" validate={[]} />
          <NumberInput source="price" validate={[]} />
          <NumberInput source="primary_amount" validate={[]} />
          <NumberInput source="amount" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="primary_discount_amount" validate={[]} />
          <NumberInput source="discount_amount" validate={[]} />
          <NumberInput source="discount_percent" validate={[]} />
          <NumberInput source="primary_tax_amount" validate={[]} />
          <NumberInput source="tax_amount" validate={[]} />
          <NumberInput source="primary_total_amount" validate={[]} />
          <NumberInput source="total_amount" validate={[]} />
          <NumberInput source="discount_tax" validate={[]} />
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="base_quantity" validate={[]} />
      </>
    }
  />
);
