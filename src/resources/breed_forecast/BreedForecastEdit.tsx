import { NumberInput, ReferenceInput, SelectInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedForecastEdit = () => (
  <ResourceEditLayout
    name={
      <>{<NumberInput source="value"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="period_id" reference="period">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="amount"  />
          <NumberInput source="primary_amount"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
