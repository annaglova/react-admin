import { BooleanField, Datagrid, DateField, List, NumberField, Pagination, ReferenceField, TextField, TextInput } from "react-admin";

const ProjectFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProjectList = () => (
  <List filters={ProjectFilters} perPage={15}  pagination={<Pagination />} >
    <Datagrid rowClick="show">
      <TextField source="id" label="Id *" />
      <TextField source="name" label="Name *" />
      <TextField source="notes" label="Notes" />
      <ReferenceField source="account_id" reference="account" label="Account Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="contact_id" reference="contact" label="Contact Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="project_entry_type_id" reference="project_entry_type" label="Project Entry Type Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="type_id" reference="project_type" label="Type Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="owner_id" label="Owner Id" />
      <ReferenceField source="status_id" reference="project_status" label="Status Id">
  <TextField source="name" />
</ReferenceField>
      <DateField source="start_date" label="Start Date" />
      <DateField source="end_date" label="End Date" />
      <NumberField source="duration" label="Duration" />
      <DateField source="deadline" label="Deadline" />
      <ReferenceField source="supplier_id" reference="account" label="Supplier Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="parent_project_id" reference="project" label="Parent Project Id">
  <TextField source="name" />
</ReferenceField>
      <NumberField source="actual_completion" label="Actual Completion" />
      <BooleanField source="is_auto_calc_completion" label="Is Auto Calc Completion" />
      <NumberField source="plan_income" label="Plan Income" />
      <NumberField source="fact_income" label="Fact Income" />
      <NumberField source="income_dev" label="Income Dev" />
      <NumberField source="income_dev_perc" label="Income Dev Perc" />
      <NumberField source="plan_external_cost" label="Plan External Cost" />
      <NumberField source="fact_external_cost" label="Fact External Cost" />
      <NumberField source="external_cost_dev" label="External Cost Dev" />
      <NumberField source="plan_external_dev_perc" label="Plan External Dev Perc" />
      <NumberField source="plan_expense" label="Plan Expense" />
      <NumberField source="fact_expense" label="Fact Expense" />
      <NumberField source="expense_dev" label="Expense Dev" />
      <NumberField source="expense_dev_perc" label="Expense Dev Perc" />
      <NumberField source="plan_internal_cost" label="Plan Internal Cost" />
      <NumberField source="fact_internal_cost" label="Fact Internal Cost" />
      <NumberField source="internal_cost_dev" label="Internal Cost Dev" />
      <NumberField source="plan_internal_dev_perc" label="Plan Internal Dev Perc" />
      <NumberField source="plan_margin" label="Plan Margin" />
      <NumberField source="plan_margin_perc" label="Plan Margin Perc" />
      <NumberField source="fact_margin" label="Fact Margin" />
      <NumberField source="fact_margin_perc" label="Fact Margin Perc" />
      <NumberField source="margin_dev" label="Margin Dev" />
      <NumberField source="margin_dev_perc" label="Margin Dev Perc" />
      <NumberField source="position" label="Position" />
      <ReferenceField source="event_id" reference="event" label="Event Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="category_id" reference="project_category" label="Category Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="breed_id" reference="breed" label="Breed Id">
  <TextField source="name" />
</ReferenceField>
      <TextField source="url" label="Url" />
      <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id">
  <TextField source="name" />
</ReferenceField>
      <ReferenceField source="cover_id" reference="cover" label="Cover Id">
  <TextField source="name" />
</ReferenceField>
    </Datagrid>
  </List>
);
