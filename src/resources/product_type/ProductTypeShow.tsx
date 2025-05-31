import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ProductTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="is_service" />
      <ReferenceField source="category_id" reference="product_category">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
