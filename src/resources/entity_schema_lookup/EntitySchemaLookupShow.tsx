import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const EntitySchemaLookupShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_public" />
      <TextField source="public_name" />
    </SimpleShowLayout>
  </Show>
);
