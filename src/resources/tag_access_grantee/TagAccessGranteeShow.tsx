import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const TagAccessGranteeShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="tag_access_id" reference="tag_access">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="can_tag" />
      <BooleanField source="can_create" />
      <BooleanField source="can_delete" />
      <BooleanField source="can_edit" />
      <BooleanField source="can_read" />
    </SimpleShowLayout>
  </Show>
);
