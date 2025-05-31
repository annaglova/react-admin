import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const HealthExamResultShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="object_id" reference="health_exam_object">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
