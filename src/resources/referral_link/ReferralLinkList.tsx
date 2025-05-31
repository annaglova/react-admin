import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ReferralLinkShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="contact_id" />
      <TextField source="code" />
    </SimpleShowLayout>
  </Show>
);
