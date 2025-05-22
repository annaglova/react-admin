import {
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const CashflowFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const CashflowList = () => (
  <List filters={CashflowFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="process_listeners" />
      <ReferenceField source="project_id" reference="projects" />
      <DateField source="number" />
      <ReferenceField source="type_id" reference="types" />
      <TextField source="details" />
      <ReferenceField source="category_id" reference="categories" />
      <ReferenceField source="status_id" reference="statuses" />
      <DateField source="date" />
      <ReferenceField source="currency_id" reference="currencies" />
      <NumberField source="currency_rate" />
      <NumberField source="amount" />
      <DateField source="primary_amount" />
      <DateField source="notes" />
      <ReferenceField source="invoice_id" reference="invoices" />
      <ReferenceField source="conf_item_id" reference="conf_items" />
      <ReferenceField
        source="income_fin_account_id"
        reference="income_fin_accounts"
      />
      <ReferenceField
        source="outcome_fin_account_id"
        reference="outcome_fin_accounts"
      />
    </Datagrid>
  </List>
);
