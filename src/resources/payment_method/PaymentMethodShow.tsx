import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PaymentMethodShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
