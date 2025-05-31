import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const LetterShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
