import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CashflowCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="number" validate={[]} />
          <ReferenceInput source="type_id" reference="cashflow_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="details" validate={[]} />
          <ReferenceInput source="category_id" reference="cashflow_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="cashflow_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="date" validate={[]} />
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="currency_rate" validate={[]} />
          <NumberInput source="amount" validate={[]} />
          <NumberInput source="primary_amount" validate={[]} />
          <TextInput source="notes" validate={[]} />
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="income_fin_account_id" reference="fin_account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="outcome_fin_account_id" reference="fin_account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
