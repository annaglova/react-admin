import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const UnitShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="short_name" />
    </SimpleShowLayout>
  </Show>
);
