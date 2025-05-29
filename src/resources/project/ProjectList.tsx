import { BooleanField, Datagrid, DateField, List, NumberField, TextField, TextInput } from "react-admin";

const ProjectFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />
  <TextInput label="Пошук по id" source="id" />
];

export const ProjectList = () => (
  <List filters={ProjectFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="notes" />
      <TextField source="name" />
      <TextField source="account_id" />
      <TextField source="contact_id" />
      <TextField source="project_entry_type_id" />
      <TextField source="type_id" />
      <TextField source="owner_id" />
      <TextField source="status_id" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <NumberField source="duration" />
      <DateField source="deadline" />
      <TextField source="supplier_id" />
      <TextField source="parent_project_id" />
      <NumberField source="actual_completion" />
      <BooleanField source="is_auto_calc_completion" />
      <NumberField source="plan_income" />
      <NumberField source="fact_income" />
      <NumberField source="income_dev" />
      <NumberField source="income_dev_perc" />
      <NumberField source="plan_external_cost" />
      <NumberField source="fact_external_cost" />
      <NumberField source="external_cost_dev" />
      <NumberField source="plan_external_dev_perc" />
      <NumberField source="plan_expense" />
      <NumberField source="fact_expense" />
      <NumberField source="expense_dev" />
      <NumberField source="expense_dev_perc" />
      <NumberField source="plan_internal_cost" />
      <NumberField source="fact_internal_cost" />
      <NumberField source="internal_cost_dev" />
      <NumberField source="plan_internal_dev_perc" />
      <NumberField source="plan_margin" />
      <NumberField source="plan_margin_perc" />
      <NumberField source="fact_margin" />
      <NumberField source="fact_margin_perc" />
      <NumberField source="margin_dev" />
      <NumberField source="margin_dev_perc" />
      <NumberField source="position" />
      <TextField source="event_id" />
      <TextField source="category_id" />
      <TextField source="breed_id" />
      <TextField source="url" />
      <TextField source="pet_type_id" />
      <TextField source="cover_id" />
    </Datagrid>
  </List>
);
