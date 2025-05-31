import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const CashflowCategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="cashflow_type_id" reference="cashflow_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
