import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const OrderDeliveryStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="position" />
    </SimpleShowLayout>
  </Show>
);
