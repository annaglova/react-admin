import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ActivityCategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="activity_type_id" reference="activity_type">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
