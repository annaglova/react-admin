import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const RawDataRealatedEntityShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
    </SimpleShowLayout>
  </Show>
);
