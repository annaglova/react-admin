import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="notes" />
      <TextInput source="name" />
      <ReferenceInput source="account_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="contact_id" reference="contact">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="project_entry_type_id" reference="project_entry_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="type_id" reference="project_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="owner_id" />
      <ReferenceInput source="status_id" reference="project_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="start_date" />
      <DateInput source="end_date" />
      <NumberInput source="duration" />
      <DateInput source="deadline" />
      <ReferenceInput source="supplier_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="parent_project_id" reference="project">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="actual_completion" />
      <BooleanInput source="is_auto_calc_completion" />
      <NumberInput source="plan_income" />
      <NumberInput source="fact_income" />
      <NumberInput source="income_dev" />
      <NumberInput source="income_dev_perc" />
      <NumberInput source="plan_external_cost" />
      <NumberInput source="fact_external_cost" />
      <NumberInput source="external_cost_dev" />
      <NumberInput source="plan_external_dev_perc" />
      <NumberInput source="plan_expense" />
      <NumberInput source="fact_expense" />
      <NumberInput source="expense_dev" />
      <NumberInput source="expense_dev_perc" />
      <NumberInput source="plan_internal_cost" />
      <NumberInput source="fact_internal_cost" />
      <NumberInput source="internal_cost_dev" />
      <NumberInput source="plan_internal_dev_perc" />
      <NumberInput source="plan_margin" />
      <NumberInput source="plan_margin_perc" />
      <NumberInput source="fact_margin" />
      <NumberInput source="fact_margin_perc" />
      <NumberInput source="margin_dev" />
      <NumberInput source="margin_dev_perc" />
      <NumberInput source="position" />
      <ReferenceInput source="event_id" reference="event">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="category_id" reference="project_category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="breed_id" reference="breed">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="url" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="cover_id" reference="cover">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
