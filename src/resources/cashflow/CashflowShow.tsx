import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CashflowShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="number" />
      <ReferenceField source="type_id" reference="cashflow_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="details" />
      <ReferenceField source="category_id" reference="cashflow_category">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="status_id" reference="cashflow_status">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="date" />
      <ReferenceField source="currency_id" reference="currency">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="currency_rate" />
      <NumberField source="amount" />
      <NumberField source="primary_amount" />
      <TextField source="notes" />
      <ReferenceField source="invoice_id" reference="invoice">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="conf_item_id" reference="conf_item">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="income_fin_account_id" reference="fin_account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="outcome_fin_account_id" reference="fin_account">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
