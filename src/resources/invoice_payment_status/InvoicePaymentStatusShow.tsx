import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const InvoicePaymentStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="final_status" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
