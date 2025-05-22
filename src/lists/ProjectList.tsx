import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const ProjectFilters = [
  <TextInput label="Пошук по імені" source="name" />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProjectList = () => (
  <List filters={ProjectFilters}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="created_on" />
      <ReferenceField source="created_by_id" reference="created_bies" />
      <DateField source="modified_on" />
      <ReferenceField source="modified_by_id" reference="modified_bies" />
      <DateField source="notes" />
      <DateField source="process_listeners" />
      <TextField source="name" />
      <ReferenceField source="account_id" reference="accounts" />
      <ReferenceField source="contact_id" reference="contacts" />
      <ReferenceField
        source="project_entry_type_id"
        reference="project_entry_types"
      />
      <ReferenceField source="type_id" reference="types" />
      <ReferenceField source="owner_id" reference="owners" />
      <ReferenceField source="status_id" reference="statuses" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <DateField source="duration" />
      <TextField source="deadline" />
      <ReferenceField source="supplier_id" reference="suppliers" />
      <ReferenceField source="parent_project_id" reference="parent_projects" />
      <DateField source="actual_completion" />
      <BooleanField source="is_auto_calc_completion" />
      <DateField source="plan_income" />
      <DateField source="fact_income" />
      <DateField source="income_dev" />
      <DateField source="income_dev_perc" />
      <DateField source="plan_external_cost" />
      <DateField source="fact_external_cost" />
      <DateField source="external_cost_dev" />
      <DateField source="plan_external_dev_perc" />
      <DateField source="plan_expense" />
      <DateField source="fact_expense" />
      <DateField source="expense_dev" />
      <DateField source="expense_dev_perc" />
      <DateField source="plan_internal_cost" />
      <DateField source="fact_internal_cost" />
      <DateField source="internal_cost_dev" />
      <DateField source="plan_internal_dev_perc" />
      <DateField source="plan_margin" />
      <DateField source="plan_margin_perc" />
      <DateField source="fact_margin" />
      <DateField source="fact_margin_perc" />
      <DateField source="margin_dev" />
      <DateField source="margin_dev_perc" />
      <DateField source="position" />
      <ReferenceField source="event_id" reference="events" />
      <ReferenceField source="category_id" reference="categories" />
      <ReferenceField source="breed_id" reference="breeds" />
      <DateField source="url" />
      <ReferenceField source="pet_type_id" reference="pet_types" />
      <ReferenceField source="cover_id" reference="covers" />
    </Datagrid>
  </List>
);
