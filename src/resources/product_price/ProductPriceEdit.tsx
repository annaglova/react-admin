import { NumberInput, ReferenceInput, SelectInput, required ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ProductPriceEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="product_id" reference="product">
   <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="currency_id" reference="currency">
   <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="price"  />
      </>
    }
  />
);
