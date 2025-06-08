import { BooleanInput, NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ProductUnitCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="product_id" reference="product">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="unit_id" reference="unit">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_base"  />
          <NumberInput source="number_of_base_units"  />
      </>
    }
  />
);
