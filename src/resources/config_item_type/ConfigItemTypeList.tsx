import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ConfigItemTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="conf_item_category_id" reference="config_item_category">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
