import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ProjectCategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="event_type_id" reference="event_type">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
