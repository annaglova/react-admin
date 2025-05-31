import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const SysLanguageShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <BooleanField source="is_used" />
      <TextField source="sys_culture_def_id" />
    </SimpleShowLayout>
  </Show>
);
