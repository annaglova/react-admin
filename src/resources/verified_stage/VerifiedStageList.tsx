import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const VerifiedStageShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
    </SimpleShowLayout>
  </Show>
);
