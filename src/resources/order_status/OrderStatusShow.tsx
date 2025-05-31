import { BooleanField, DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const OrderStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="position" />
      <BooleanField source="final_status" />
    </SimpleShowLayout>
  </Show>
);
