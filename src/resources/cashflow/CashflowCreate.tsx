import { DateInput, NumberInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CashflowCreate = () => (
  <ResourceCreateLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="project_id" reference="project">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="number" />
          <ReferenceInput source="type_id" reference="cashflow_type">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="details" />
          <ReferenceInput source="category_id" reference="cashflow_category">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="status_id" reference="cashflow_status">
  <SelectInput optionText="name" />
</ReferenceInput>
          <DateInput source="date" />
          <ReferenceInput source="currency_id" reference="currency">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="currency_rate" />
          <NumberInput source="amount" />
          <NumberInput source="primary_amount" />
          <TextInput source="notes" />
          <ReferenceInput source="invoice_id" reference="invoice">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="conf_item_id" reference="conf_item">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="income_fin_account_id" reference="fin_account">
  <SelectInput optionText="name" />
</ReferenceInput>
          <ReferenceInput source="outcome_fin_account_id" reference="fin_account">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
