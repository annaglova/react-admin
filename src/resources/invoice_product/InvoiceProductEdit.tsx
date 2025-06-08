import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const InvoiceProductEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes"  />
          <ReferenceInput source="product_id" reference="product">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="custom_product"  />
          <DateInput source="delivery_date"  />
          <NumberInput source="quantity"  />
          <ReferenceInput source="unit_id" reference="unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="primary_price"  />
          <NumberInput source="price"  />
          <NumberInput source="primary_amount"  />
          <NumberInput source="amount"  />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="primary_discount_amount"  />
          <NumberInput source="discount_amount"  />
          <NumberInput source="discount_percent"  />
          <NumberInput source="primary_tax_amount"  />
          <NumberInput source="tax_amount"  />
          <NumberInput source="primary_total_amount"  />
          <NumberInput source="total_amount"  />
          <NumberInput source="discount_tax"  />
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="base_quantity"  />
      </>
    }
  />
);
