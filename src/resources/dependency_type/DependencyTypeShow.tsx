import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const DependencyTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="for_service_service" />
      <BooleanField source="for_conf_item_conf_item" />
      <BooleanField source="for_service_conf_item" />
      <TextField source="reverse_type_name" />
      <ReferenceField source="dependency_category_id" reference="dependency_category">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
