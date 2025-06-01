import { ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CashflowCategoryCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="cashflow_type_id" reference="cashflow_type">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
