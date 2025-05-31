import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ReferrerTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="matomo_code" />
    </SimpleShowLayout>
  </Show>
);
