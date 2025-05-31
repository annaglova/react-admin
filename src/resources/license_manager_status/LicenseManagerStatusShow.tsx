import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const LicenseManagerStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
