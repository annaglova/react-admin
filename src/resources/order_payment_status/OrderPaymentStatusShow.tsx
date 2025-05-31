import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const OrderPaymentStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="position" />
    </SimpleShowLayout>
  </Show>
);
