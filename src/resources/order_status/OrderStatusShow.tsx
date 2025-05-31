import { BooleanField, DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const OrderStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="position" />
      <BooleanField source="final_status" />
    </SimpleShowLayout>
  </Show>
);
