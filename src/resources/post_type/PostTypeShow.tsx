import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PostTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="template_text" />
    </SimpleShowLayout>
  </Show>
);
