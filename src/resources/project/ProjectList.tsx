import { BooleanField, Datagrid, DateField, List, NumberField, ReferenceField, TextField, TextInput } from "react-admin";

const ProjectFilters = [
  <TextInput label="Пошук по імені" source="name" alwaysOn />,
  <TextInput label="Пошук по id" source="id" />,
];

export const ProjectList = () => (
  <List filters={ProjectFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="notes" />
      <TextField source="name" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="contact_id" reference="contact">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="project_entry_type_id" reference="project_entry_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="type_id" reference="project_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
      <ReferenceField source="status_id" reference="project_status">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_date" />
      <DateField source="end_date" />
      <NumberField source="duration" />
      <DateField source="deadline" />
      <ReferenceField source="supplier_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="parent_project_id" reference="project">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceField source="event_id" reference="event">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="category_id" reference="project_category">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="url" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="cover_id" reference="cover">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
