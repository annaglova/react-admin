import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const TimeZoneShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <TextField source="offset" />
      <TextField source="code_american" />
    </SimpleShowLayout>
  </Show>
);
