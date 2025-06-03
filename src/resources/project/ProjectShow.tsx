// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
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
    detailsConfigs={
      [
      {
        label: "Activity",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"activity"} target={"project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="title" />
              <DateField source="start_date" />
              <DateField source="due_date" />
              <ReferenceField source="priority_id" reference="activity_priority"><TextField source="name" /></ReferenceField>
              <TextField source="author_id" />
              <BooleanField source="remind_to_author" />
              <DateField source="remind_to_author_date" />
              <TextField source="owner_id" />
              <BooleanField source="remind_to_owner" />
              <DateField source="remind_to_owner_date" />
              <ReferenceField source="type_id" reference="activity_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="activity_category_id" reference="activity_category"><TextField source="name" /></ReferenceField>
              <BooleanField source="show_in_scheduler" />
              <ReferenceField source="status_id" reference="activity_status"><TextField source="name" /></ReferenceField>
              <ReferenceField source="result_id" reference="activity_result"><TextField source="name" /></ReferenceField>
              <TextField source="detailed_result" />
              <ReferenceField source="time_zone_id" reference="time_zone"><TextField source="name" /></ReferenceField>
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <TextField source="sender" />
              <TextField source="recepient" />
              <TextField source="copy_recepient" />
              <TextField source="blind_copy_recepient" />
              <TextField source="body" />
              <TextField source="notes" />
              <TextField source="color" />
              <DateField source="send_date" />
              <NumberField source="duration_in_minutes" />
              <TextField source="error_on_send" />
              <TextField source="duration_in_mnutes_and_hours" />
              <TextField source="allowed_result" />
              <BooleanField source="created_by_inv_crm" />
              <BooleanField source="is_html_body" />
              <TextField source="mail_hash" />
              <TextField source="process_element_id" />
              <TextField source="global_activity_id" />
              <BooleanField source="is_need_process" />
              <ReferenceField source="activity_connection_id" reference="activity"><TextField source="name" /></ReferenceField>
              <TextField source="organizer_id" />
              <TextField source="header_properties" />
              <BooleanField source="is_auto_submitted" />
              <TextField source="sender_contact_id" />
              <TextField source="preview" />
              <TextField source="user_email_address" />
              <TextField source="location" />
              <TextField source="enrich_status" />
              <BooleanField source="service_processed" />
              <BooleanField source="is_not_published" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="queue_item_id" />
              <ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>
              <TextField source="full_project_name" />
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
              <BooleanField source="is_template" />
              <TextField source="owner_role_id" />
              <DateField source="remote_created_on" />
              <ReferenceField source="competition_backup_id" reference="competition_backup"><TextField source="name" /></ReferenceField>
              <ReferenceField source="competition_id" reference="competition"><TextField source="name" /></ReferenceField>
              <ReferenceField source="issue_type_id" reference="issue_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="user_quest_id" reference="user_quest"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"raw_data"} target={"project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="json" />
              <ReferenceField source="status_id" reference="raw_data_status"><TextField source="name" /></ReferenceField>
              <TextField source="log" />
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <TextField source="redirect_url" />
              <TextField source="record_id" />
              <TextField source="entity_name" />
              <TextField source="model" />
              <TextField source="hash_md5" />
              <TextField source="contact_id" />
              <TextField source="account_id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="pet_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"project"} target={"parent_project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="contact_id" reference="contact"><TextField source="name" /></ReferenceField>
              <ReferenceField source="project_entry_type_id" reference="project_entry_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="type_id" reference="project_type"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="status_id" reference="project_status"><TextField source="name" /></ReferenceField>
              <DateField source="start_date" />
              <DateField source="end_date" />
              <NumberField source="duration" />
              <DateField source="deadline" />
              <ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>
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
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <ReferenceField source="category_id" reference="project_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <TextField source="url" />
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Cashflow",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"cashflow"} target={"project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="number" />
              <ReferenceField source="type_id" reference="cashflow_type"><TextField source="name" /></ReferenceField>
              <TextField source="details" />
              <ReferenceField source="category_id" reference="cashflow_category"><TextField source="name" /></ReferenceField>
              <ReferenceField source="status_id" reference="cashflow_status"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" />
              <NumberField source="amount" />
              <NumberField source="primary_amount" />
              <TextField source="notes" />
              <ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>
              <ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>
              <ReferenceField source="income_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="outcome_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"note"} target={"project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="notes" />
              <TextField source="pet_id" />
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="cover_id" reference="cover"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" />
              <ReferenceField source="entity_schema_id" reference="entity_schema_lookup"><TextField source="name" /></ReferenceField>
              <ReferenceField source="litter_id" reference="litter"><TextField source="name" /></ReferenceField>
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"public_data"} target={"project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="name" />
              <TextField source="hash_md5" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <TextField source="pet_id" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <ReferenceField source="event_id" reference="event"><TextField source="name" /></ReferenceField>
              <TextField source="record_id" />
              <TextField source="model" />
              <TextField source="entity_name" />
              <BooleanField source="primary" />
              <ReferenceField source="redirect_id" reference="public_data"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_type_id" reference="pet_type"><TextField source="name" /></ReferenceField>
              <ReferenceField source="country_id" reference="country"><TextField source="name" /></ReferenceField>
              <ReferenceField source="pet_titles_id" reference="title_in_pet"><TextField source="name" /></ReferenceField>
              <BooleanField source="has_owner" />
              <TextField source="pet_breed_id" />
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
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"invoice"} target={"project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="number" />
              <DateField source="start_date" />
              <NumberField source="primary_amount" />
              <NumberField source="primary_payment_amount" />
              <ReferenceField source="payment_status_id" reference="invoice_payment_status"><TextField source="name" /></ReferenceField>
              <TextField source="owner_id" />
              <ReferenceField source="supplier_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>
              <BooleanField source="remind_to_owner" />
              <DateField source="remind_to_owner_date" />
              <ReferenceField source="customer_billing_info_id" reference="account_billing_info"><TextField source="name" /></ReferenceField>
              <ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>
              <NumberField source="currency_rate" />
              <NumberField source="amount" />
              <DateField source="due_date" />
              <NumberField source="payment_amount" />
              <TextField source="notes" />
              <ReferenceField source="account_id" reference="account"><TextField source="name" /></ReferenceField>
              <TextField source="contact_id" />
              <ReferenceField source="supplier_id" reference="account"><TextField source="name" /></ReferenceField>
              <ReferenceField source="order_id" reference="order"><TextField source="name" /></ReferenceField>
              <NumberField source="amount_without_tax" />
              <NumberField source="primary_amount_without_tax" />
              <NumberField source="payment_amount_without_tax" />
              <NumberField source="primary_payment_amount_without_tax" />
              <ReferenceField source="breed_id" reference="breed"><TextField source="name" /></ReferenceField>
              <BooleanField source="created_from_order" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ,
        
      {
        label: "Pet In Project",
        content: (
          <>
            <div className="flex justify-end px-4 pt-2 pb-1">
              <CreateButton/>
            </div>
            <ReferenceManyField reference={"pet_in_project"} target={"project_id"} record={record} perPage={15}  pagination={<Pagination />}>
              <Datagrid>
                <TextField source="id" />
              <TextField source="pet_id" />
              <NumberField source="number" />
              <ReferenceField source="class_id" reference="pet_class"><TextField source="name" /></ReferenceField>
              <TextField source="web_link" />
              <TextField source="result" />
              <TextField source="code" />
              <ReferenceField source="handler_id" reference="contact"><TextField source="name" /></ReferenceField>
              <TextField source="judge_id" />
              <ReferenceField source="place_id" reference="place"><TextField source="name" /></ReferenceField>
              <ReferenceField source="qualification_id" reference="pet_qualification"><TextField source="name" /></ReferenceField>
              <DateField source="date" />
              <TextField source="temp_project_name" />
              <TextField source="pet_breed_id" />
              </Datagrid>
            </ReferenceManyField>
          </>
        ),
      }
  ]
    }
  />
);
