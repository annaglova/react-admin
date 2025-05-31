// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const ProjectShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Account Id" value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Contact Id" value={<ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Project Entry Type Id" value={<ReferenceField source="project_entry_type_id" reference="project_entry_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="project_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Owner Id" value={<TextField source="owner_id" />} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="project_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Start Date" value={<DateField source="start_date" />} />
        <Labeled label="End Date" value={<DateField source="end_date" />} />
        <Labeled label="Duration" value={<NumberField source="duration" />} />
        <Labeled label="Deadline" value={<DateField source="deadline" />} />
        <Labeled label="Supplier Id" value={<ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Parent Project Id" value={<ReferenceField source="parent_project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Actual Completion" value={<NumberField source="actual_completion" />} />
        <Labeled label="Is Auto Calc Completion" value={<BooleanField source="is_auto_calc_completion" />} />
        <Labeled label="Plan Income" value={<NumberField source="plan_income" />} />
        <Labeled label="Fact Income" value={<NumberField source="fact_income" />} />
        <Labeled label="Income Dev" value={<NumberField source="income_dev" />} />
        <Labeled label="Income Dev Perc" value={<NumberField source="income_dev_perc" />} />
        <Labeled label="Plan External Cost" value={<NumberField source="plan_external_cost" />} />
        <Labeled label="Fact External Cost" value={<NumberField source="fact_external_cost" />} />
        <Labeled label="External Cost Dev" value={<NumberField source="external_cost_dev" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Plan External Dev Perc" value={<NumberField source="plan_external_dev_perc" />} />
        <Labeled label="Plan Expense" value={<NumberField source="plan_expense" />} />
        <Labeled label="Fact Expense" value={<NumberField source="fact_expense" />} />
        <Labeled label="Expense Dev" value={<NumberField source="expense_dev" />} />
        <Labeled label="Expense Dev Perc" value={<NumberField source="expense_dev_perc" />} />
        <Labeled label="Plan Internal Cost" value={<NumberField source="plan_internal_cost" />} />
        <Labeled label="Fact Internal Cost" value={<NumberField source="fact_internal_cost" />} />
        <Labeled label="Internal Cost Dev" value={<NumberField source="internal_cost_dev" />} />
        <Labeled label="Plan Internal Dev Perc" value={<NumberField source="plan_internal_dev_perc" />} />
        <Labeled label="Plan Margin" value={<NumberField source="plan_margin" />} />
        <Labeled label="Plan Margin Perc" value={<NumberField source="plan_margin_perc" />} />
        <Labeled label="Fact Margin" value={<NumberField source="fact_margin" />} />
        <Labeled label="Fact Margin Perc" value={<NumberField source="fact_margin_perc" />} />
        <Labeled label="Margin Dev" value={<NumberField source="margin_dev" />} />
        <Labeled label="Margin Dev Perc" value={<NumberField source="margin_dev_perc" />} />
        <Labeled label="Position" value={<NumberField source="position" />} />
        <Labeled label="Event Id" value={<ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="project_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Breed Id" value={<ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Url" value={<TextField source="url" />} />
        <Labeled label="Pet Type Id" value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Cover Id" value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
