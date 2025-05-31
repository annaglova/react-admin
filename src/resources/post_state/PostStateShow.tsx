import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PostStateShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
