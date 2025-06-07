import { Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const CashflowFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CashflowList = () => (
  <List filters={CashflowFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id" />
      <ReferenceField source="project_id" reference="project" label="Project Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="number" label="Number" />
      <ReferenceField source="type_id" reference="cashflow_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="details" label="Details" />
      <ReferenceField source="category_id" reference="cashflow_category" label="Category Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="status_id" reference="cashflow_status" label="Status Id">
  <TextField source="name" />
</ReferenceField>
      <DateField source="date" label="Date" />
      <ReferenceField source="currency_id" reference="currency" label="Currency Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="currency_rate" label="Currency Rate" />
      <NumberField source="amount" label="Amount" />
      <NumberField source="primary_amount" label="Primary Amount" />
      <TextField source="notes" label="Notes" />
      <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="income_fin_account_id" reference="fin_account" label="Income Fin Account Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="outcome_fin_account_id" reference="fin_account" label="Outcome Fin Account Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
