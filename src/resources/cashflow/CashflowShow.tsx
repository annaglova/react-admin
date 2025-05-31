// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, NumberField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { MainResourceShowLayout } from "@/layouts/MainResourceShowLayout";

export const CashflowShow = ({ record }: any) => (
  <MainResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Project Id" value={<ReferenceField source="project_id" reference="project"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Number" value={<TextField source="number" />} />
        <Labeled label="Type Id" value={<ReferenceField source="type_id" reference="cashflow_type"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Details" value={<TextField source="details" />} />
        <Labeled label="Category Id" value={<ReferenceField source="category_id" reference="cashflow_category"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Status Id" value={<ReferenceField source="status_id" reference="cashflow_status"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Date" value={<DateField source="date" />} />
        <Labeled label="Currency Id" value={<ReferenceField source="currency_id" reference="currency"><TextField source="name" /></ReferenceField>} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Currency Rate" value={<NumberField source="currency_rate" />} />
        <Labeled label="Amount" value={<NumberField source="amount" />} />
        <Labeled label="Primary Amount" value={<NumberField source="primary_amount" />} />
        <Labeled label="Notes" value={<TextField source="notes" />} />
        <Labeled label="Invoice Id" value={<ReferenceField source="invoice_id" reference="invoice"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Conf Item Id" value={<ReferenceField source="conf_item_id" reference="conf_item"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Income Fin Account Id" value={<ReferenceField source="income_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>} />
        <Labeled label="Outcome Fin Account Id" value={<ReferenceField source="outcome_fin_account_id" reference="fin_account"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
