import { NumberInput, ReferenceInput, SelectInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const BreedForecastCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<NumberInput source="value" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="period_id" reference="period">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="amount" validate={[]} />
          <NumberInput source="primary_amount" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
