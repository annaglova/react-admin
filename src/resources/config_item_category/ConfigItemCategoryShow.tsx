import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ConfigItemCategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
