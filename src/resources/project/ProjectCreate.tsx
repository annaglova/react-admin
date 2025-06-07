import { BooleanInput, DateInput, NumberInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ProjectCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="contact_id" reference="contact">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="project_entry_type_id" reference="project_entry_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="project_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="owner_id" validate={[]} />
          <ReferenceInput source="status_id" reference="project_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <DateInput source="start_date" validate={[]} />
          <DateInput source="end_date" validate={[]} />
          <NumberInput source="duration" validate={[]} />
          <DateInput source="deadline" validate={[]} />
          <ReferenceInput source="supplier_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="parent_project_id" reference="project">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <NumberInput source="actual_completion" validate={[]} />
          <BooleanInput source="is_auto_calc_completion" validate={[]} />
          <NumberInput source="plan_income" validate={[]} />
          <NumberInput source="fact_income" validate={[]} />
          <NumberInput source="income_dev" validate={[]} />
          <NumberInput source="income_dev_perc" validate={[]} />
          <NumberInput source="plan_external_cost" validate={[]} />
          <NumberInput source="fact_external_cost" validate={[]} />
          <NumberInput source="external_cost_dev" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="plan_external_dev_perc" validate={[]} />
          <NumberInput source="plan_expense" validate={[]} />
          <NumberInput source="fact_expense" validate={[]} />
          <NumberInput source="expense_dev" validate={[]} />
          <NumberInput source="expense_dev_perc" validate={[]} />
          <NumberInput source="plan_internal_cost" validate={[]} />
          <NumberInput source="fact_internal_cost" validate={[]} />
          <NumberInput source="internal_cost_dev" validate={[]} />
          <NumberInput source="plan_internal_dev_perc" validate={[]} />
          <NumberInput source="plan_margin" validate={[]} />
          <NumberInput source="plan_margin_perc" validate={[]} />
          <NumberInput source="fact_margin" validate={[]} />
          <NumberInput source="fact_margin_perc" validate={[]} />
          <NumberInput source="margin_dev" validate={[]} />
          <NumberInput source="margin_dev_perc" validate={[]} />
          <NumberInput source="position" validate={[]} />
          <ReferenceInput source="event_id" reference="event">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="category_id" reference="project_category">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="url" validate={[]} />
          <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
  />
);
