import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CashflowCategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="cashflow_type_id" reference="cashflow_type">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
