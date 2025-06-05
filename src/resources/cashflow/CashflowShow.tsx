// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { BooleanField, CreateButton, Datagrid, DateField, NumberField, Pagination, ReferenceField, ReferenceManyField, Tab, TextField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";


export const CashflowShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" required={false} value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" required={false} value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Project Id" required={false} value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Number" required={false} value={<TextField source="number" />} />
        <Labeled label="Type Id" required={false} value={<ReferenceField source="type_id" reference="cashflow_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Details" required={false} value={<TextField source="details" />} />
        <Labeled label="Category Id" required={false} value={<ReferenceField source="category_id" reference="cashflow_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Status Id" required={false} value={<ReferenceField source="status_id" reference="cashflow_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date" required={false} value={<DateField source="date" />} />
        <Labeled label="Currency Id" required={false} value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Currency Rate" required={false} value={<NumberField source="currency_rate" />} />
        <Labeled label="Amount" required={false} value={<NumberField source="amount" />} />
        <Labeled label="Primary Amount" required={false} value={<NumberField source="primary_amount" />} />
        <Labeled label="Notes" required={false} value={<TextField source="notes" />} />
        <Labeled label="Invoice Id" required={false} value={<ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Conf Item Id" required={false} value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Income Fin Account Id" required={false} value={<ReferenceField source="income_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Outcome Fin Account Id" required={false} value={<ReferenceField source="outcome_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>} />
      </>
    }
    detailsConfigs={
      []
    }
  />
);
