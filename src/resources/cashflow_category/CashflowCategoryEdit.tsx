import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CashflowCategoryEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="cashflow_type_id" reference="cashflow_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
