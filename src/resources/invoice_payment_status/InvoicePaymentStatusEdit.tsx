import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const InvoicePaymentStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="final_status" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
