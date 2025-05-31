// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { ReferenceField, TextField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const CashflowCategoryShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Cashflow Type Id" value={<ReferenceField source="cashflow_type_id" reference="cashflow_type"><TextField source="name" /></ReferenceField>} />
      </>
    }
  />
);
