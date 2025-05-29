import { Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const CashflowFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CashflowList = () => (
  <List filters={CashflowFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="project_id" />
      <TextField source="number" />
      <TextField source="type_id" />
      <TextField source="details" />
      <TextField source="category_id" />
      <TextField source="status_id" />
      <DateField source="date" />
      <TextField source="currency_id" />
      <NumberField source="currency_rate" />
      <NumberField source="amount" />
      <NumberField source="primary_amount" />
      <TextField source="notes" />
      <TextField source="invoice_id" />
      <TextField source="conf_item_id" />
      <TextField source="income_fin_account_id" />
      <TextField source="outcome_fin_account_id" />
    </Datagrid>
  </List>
);
