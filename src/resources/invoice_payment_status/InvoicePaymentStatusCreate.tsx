import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const InvoicePaymentStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="final_status" />
      <TextInput source="color" />
    </SimpleForm>
  </Create>
);
