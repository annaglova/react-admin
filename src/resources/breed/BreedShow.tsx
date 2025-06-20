// АВТОМАТИЧНО ЗГЕНЕРОВАНО!
import { BooleanField, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";
import { ChildCreateButton } from "@/components/ChildCreateButton";
import { PrettyJsonField } from "@/components/PrettyJsonField";


export const BreedShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={true} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={true} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Pet Type Id" required={false} value={<ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Differ By Coat Color" required={false} value={<BooleanField source="differ_by_coat_color" />} />
        <Labeled label="Differ By Coat Type" required={false} value={<BooleanField source="differ_by_coat_type" />} />
        <Labeled label="Differ By Size" required={false} value={<BooleanField source="differ_by_size" />} />
        <Labeled label="Language Id" required={false} value={<ReferenceField source="language_id" reference="sys_language"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Authentic Name" required={false} value={<TextField source="authentic_name" />} />
        <Labeled label="Differ By Body Feature" required={false} value={<BooleanField source="differ_by_body_feature" />} />
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="breed_category"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Has Related Breed" required={false} value={<BooleanField source="has_related_breed" />} />
        <Labeled label="Admin Name" required={false} value={<TextField source="admin_name" />} />
        <Labeled label="Url" required={false} value={<TextField source="url" />} />
        <Labeled label="Account Id" required={false} value={<ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Avatar Url" required={false} value={<TextField source="avatar_url" />} />
        <Labeled label="Cover Id" required={false} value={<ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Public Data Id" required={false} value={<ReferenceField source="public_data_id" reference="public_data"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Measurements" value={<PrettyJsonField source="measurements" label="Measurements" />} />
      </>
    }
    detailsConfigs={
      [
  {
    label: "Contact In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="contact_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="contact_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <NumberField source="rating" label="Rating" />
              <NumberField source="place" label="Place" />
              <ReferenceField source="contact_role_id" reference="contact_role" label="Contact Role Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Payment In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="payment_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="payment_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="amount" label="Amount" />
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="invoice_id" reference="invoice" label="Invoice Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Raw Data",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="raw_data" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="raw_data" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <TextField source="json" label="Json" />
              <ReferenceField source="status_id" reference="raw_data_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <TextField source="log" label="Log" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <TextField source="redirect_url" label="Redirect Url" />
              <TextField source="record_id" label="Record Id" />
              <TextField source="entity_name" label="Entity Name" />
              <TextField source="model" label="Model" />
              <TextField source="hash_md5" label="Hash Md5" />
              <TextField source="contact_id" label="Contact Id" />
              <TextField source="account_id" label="Account Id" />
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" label="Pet Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Order",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="order" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="order" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Project",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="project" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="project" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact" label="Contact Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_entry_type_id" reference="project_entry_type" label="Project Entry Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="project_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="status_id" reference="project_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" label="Start Date" />
              <DateField source="end_date" label="End Date" />
              <NumberField source="duration" label="Duration" />
              <DateField source="deadline" label="Deadline" />
              <ReferenceField source="supplier_id" reference="account" label="Supplier Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="parent_project_id" reference="project" label="Parent Project Id"><TextField source="name" /></ReferenceField>
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
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="project_category" label="Category Id"><TextField source="name" /></ReferenceField>
              <TextField source="url" label="Url" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Competition",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="competition" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="competition" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="provider_id" reference="account" label="Provider Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="parent_id" reference="competition" label="Parent Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="competition_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="template_id" reference="competition" label="Template Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="exists_qualification" label="Exists Qualification" />
              <BooleanField source="exists_place" label="Exists Place" />
              <BooleanField source="exists_award" label="Exists Award" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <NumberField source="order" label="Order" />
              <ReferenceField source="category_id" reference="competition_category" label="Category Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Cover",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="cover" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="cover" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="notes" label="Notes" />
              <TextField source="redirect_url" label="Redirect Url" />
              <TextField source="avatar_url" label="Avatar Url" />
              <ReferenceField source="type_id" reference="cover_type" label="Type Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <TextField source="url" label="Url" />
              <BooleanField source="is_default" label="Is Default" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Note",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="note" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="note" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup" label="Entity Schema Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Public Data",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="public_data" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="public_data" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="hash_md5" label="Hash Md5" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="pet_id" reference="pet_manchester_terrier_toy" label="Pet Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event" label="Event Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" label="Record Id" />
              <TextField source="model" label="Model" />
              <TextField source="entity_name" label="Entity Name" />
              <BooleanField source="primary" label="Primary" />
              <ReferenceField source="redirect_id" reference="public_data" label="Redirect Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country" label="Country Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_titles_id" reference="title_in_pet" label="Pet Titles Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_owner" label="Has Owner" />
              <ReferenceField source="pet_breed_id" reference="pet_manchester_terrier_toy" label="Pet Breed Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Invoice",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="invoice" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="invoice" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="number" label="Number" />
              <DateField source="start_date" label="Start Date" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <NumberField source="primary_payment_amount" label="Primary Payment Amount" />
              <ReferenceField source="payment_status_id" reference="invoice_payment_status" label="Payment Status Id"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" label="Owner Id" />
              <ReferenceField source="supplier_billing_info_id" reference="account_billing_info" label="Supplier Billing Info Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="remind_to_owner" label="Remind To Owner" />
              <DateField source="remind_to_owner_date" label="Remind To Owner Date" />
              <ReferenceField source="customer_billing_info_id" reference="account_billing_info" label="Customer Billing Info Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" label="Currency Rate" />
              <NumberField source="amount" label="Amount" />
              <DateField source="due_date" label="Due Date" />
              <NumberField source="payment_amount" label="Payment Amount" />
              <TextField source="notes" label="Notes" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="supplier_id" reference="account" label="Supplier Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_id" reference="project" label="Project Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="order_id" reference="order" label="Order Id"><TextField source="name" /></ReferenceField>
              <NumberField source="amount_without_tax" label="Amount Without Tax" />
              <NumberField source="primary_amount_without_tax" label="Primary Amount Without Tax" />
              <NumberField source="payment_amount_without_tax" label="Payment Amount Without Tax" />
              <NumberField source="primary_payment_amount_without_tax" label="Primary Payment Amount Without Tax" />
              <BooleanField source="created_from_order" label="Created From Order" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed Division",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_division" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="breed_division" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name *" />
              <TextField source="description" label="Description" />
              <BooleanField source="division_by_color" label="Division By Color" />
              <BooleanField source="is_main" label="Is Main" />
              <BooleanField source="division_by_body_feature" label="Division By Body Feature" />
              <BooleanField source="division_by_size" label="Division By Size" />
              <BooleanField source="division_by_coat_type" label="Division By Coat Type" />
              <ReferenceField source="breed_standard_id" reference="breed_standard" label="Breed Standard Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Related Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="related_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="related_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed Synonym",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_synonym" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="breed_synonym" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <ReferenceField source="language_id" reference="sys_language" label="Language Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Body Feature In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="body_feature_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="body_feature_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="body_feature_id" reference="body_feature" label="Body Feature Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Coat Type In Breed Division",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="coat_type_in_breed_division" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="coat_type_in_breed_division" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="coat_type_id" reference="coat_type" label="Coat Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_division_id" reference="breed_division" label="Breed Division Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Achievement In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="achievement_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="achievement_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="achievement_id" reference="achievement" label="Achievement Id"><TextField source="name" /></ReferenceField>
              <DateField source="date" label="Date" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Size In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_size_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="pet_size_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="pet_size_id" reference="pet_size" label="Pet Size Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Body Feature In Breed Division",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="body_feature_in_breed_division" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="body_feature_in_breed_division" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="body_feature_id" reference="body_feature" label="Body Feature Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_division_id" reference="breed_division" label="Breed Division Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Health Exam Object In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="health_exam_object_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="health_exam_object_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="health_exam_object_id" reference="health_exam_object" label="Health Exam Object Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Coat Color In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="coat_color_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="coat_color_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="coat_color_id" reference="coat_color" label="Coat Color Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Coat Color In Breed Division",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="coat_color_in_breed_division" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="coat_color_in_breed_division" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="breed_division_id" reference="breed_division" label="Breed Division Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_color_id" reference="coat_color" label="Coat Color Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Coat Type In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="coat_type_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="coat_type_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="coat_type_id" reference="coat_type" label="Coat Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed Forecast",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_forecast" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="breed_forecast" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="value" label="Value" />
              <ReferenceField source="period_id" reference="period" label="Period Id"><TextField source="name" /></ReferenceField>
              <NumberField source="amount" label="Amount" />
              <NumberField source="primary_amount" label="Primary Amount" />
              <ReferenceField source="currency_id" reference="currency" label="Currency Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet Size In Breed Division",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet_size_in_breed_division" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="pet_size_in_breed_division" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="pet_size_id" reference="pet_size" label="Pet Size Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_division_id" reference="breed_division" label="Breed Division Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Measurement Type In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="measurement_type_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="measurement_type_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="measurement_type_id" reference="measurement_type" label="Measurement Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed In Kennel",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_in_kennel" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="breed_in_kennel" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_standard_id" reference="breed_standard" label="Breed Standard Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed In Account",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_in_account" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="breed_in_account" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="breed_standard_id" reference="breed_standard" label="Breed Standard Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <NumberField source="pet_count" label="Pet Count" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed Standard",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_standard" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="breed_standard" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <ReferenceField source="subsection_id" reference="breed_subsection" label="Subsection Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="section_id" reference="breed_section" label="Section Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="group_id" reference="breed_group" label="Group Id"><TextField source="name" /></ReferenceField>
              <TextField source="code" label="Code" />
              <ReferenceField source="provider_id" reference="account" label="Provider Id"><TextField source="name" /></ReferenceField>
              <DateField source="effective" label="Effective" />
              <DateField source="approved" label="Approved" />
              <TextField source="link" label="Link" />
              <BooleanField source="working_trial" label="Working Trial" />
              <ReferenceField source="status_id" reference="breed_standard_status" label="Status Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_variable_divisions" label="Has Variable Divisions" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Conf Item Measurement",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="conf_item_measurement" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="conf_item_measurement" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <NumberField source="value" label="Value" />
              <ReferenceField source="conf_item_id" reference="conf_item" label="Conf Item Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account" label="Account Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "User Settings",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="user_settings" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="user_settings" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="contact_id" label="Contact Id" />
              <ReferenceField source="page_view_id" reference="page_view" label="Page View Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="size_unit_id" reference="unit" label="Size Unit Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="weight_unit_id" reference="unit" label="Weight Unit Id"><TextField source="name" /></ReferenceField>
              <BooleanField source="anonymous_gift_sender" label="Anonymous Gift Sender" />
              <BooleanField source="welcome_stage_complete" label="Welcome Stage Complete" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Top Patron In Breed",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="top_patron_in_breed" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="top_patron_in_breed" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <TextField source="name" label="Name" />
              <TextField source="contact_id" label="Contact Id" />
              <NumberField source="rating" label="Rating" />
              <NumberField source="place" label="Place" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Breed In Contact",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="breed_in_contact" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="breed_in_contact" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id" />
              <ReferenceField source="breed_standard_id" reference="breed_standard" label="Breed Standard Id"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" label="Contact Id" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
,
        
  {
    label: "Pet",
    content: (
      <>
        <div className="flex justify-end px-4 pt-2 pb-1">
          <ChildCreateButton resource="pet" fkField="breed_id" />
        </div>
        <ReferenceManyField reference="pet" target="breed_id" record={record} perPage={15}  pagination={<Pagination />}>
          <Datagrid>
            <TextField source="id" label="Id *" />
              <TextField source="name" label="Name" />
              <TextField source="notes" label="Notes" />
              <DateField source="date_of_birth" label="Date Of Birth" />
              <ReferenceField source="owner_id" reference="contact" label="Owner Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="kennel_id" reference="account" label="Kennel Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type" label="Pet Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="sex_id" reference="sex" label="Sex Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="father_id" reference="pet" label="Father Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="mother_id" reference="pet_manchester_terrier_toy" label="Mother Id"><TextField source="name" /></ReferenceField>
              <TextField source="breeder_id" label="Breeder Id" />
              <TextField source="photo_id" label="Photo Id" />
              <DateField source="date_of_death" label="Date Of Death" />
              <ReferenceField source="pet_status_id" reference="pet_status" label="Pet Status Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_type_id" reference="coat_type" label="Coat Type Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="coat_color_id" reference="coat_color" label="Coat Color Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="size_id" reference="pet_size" label="Size Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="body_feature_id" reference="body_feature" label="Body Feature Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter" label="Litter Id"><TextField source="name" /></ReferenceField>
              <TextField source="call_name" label="Call Name" />
              <ReferenceField source="country_of_birth_id" reference="country" label="Country Of Birth Id"><TextField source="name" /></ReferenceField>
              <TextField source="titles" label="Titles" />
              <NumberField source="inbreeding_percent" label="Inbreeding Percent" />
              <TextField source="url" label="Url" />
              <TextField source="page_template_code" label="Page Template Code" />
              <ReferenceField source="verified_stage_id" reference="verified_stage" label="Verified Stage Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="owner_kennel_id" reference="account" label="Owner Kennel Id"><TextField source="name" /></ReferenceField>
              <TextField source="full_breed_name" label="Full Breed Name" />
              <TextField source="avatar_url" label="Avatar Url" />
              <ReferenceField source="breed_division_id" reference="breed_division" label="Breed Division Id"><TextField source="name" /></ReferenceField>
              <TextField source="trim_titles" label="Trim Titles" />
              <ReferenceField source="country_of_stay_id" reference="country" label="Country Of Stay Id"><TextField source="name" /></ReferenceField>
              <DateField source="calc_date_of_birth" label="Calc Date Of Birth" />
              <NumberField source="coi" label="Coi" />
              <ReferenceField source="verification_status_id" reference="verification_status" label="Verification Status Id"><TextField source="name" /></ReferenceField>
              <NumberField source="rating_placement_in_breed" label="Rating Placement In Breed" />
              <BooleanField source="is_public" label="Is Public" />
              <ReferenceField source="cover_id" reference="cover" label="Cover Id"><TextField source="name" /></ReferenceField>
              <ReferenceField source="public_data_id" reference="public_data" label="Public Data Id"><TextField source="name" /></ReferenceField>
              <NumberField source="weight" label="Weight" />
              <NumberField source="test_int_index" label="Test Int Index" />
              <PrettyJsonField source="measurements" label="Measurements" />
          </Datagrid>
        </ReferenceManyField>
      </>
    ),
  }
]
    }
  />
);
