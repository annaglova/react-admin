import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AccountTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="priority" />
      <TextField source="raw_data_model" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
