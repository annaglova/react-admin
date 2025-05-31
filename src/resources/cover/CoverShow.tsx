import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CoverShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="notes" />
      <TextField source="redirect_url" />
      <TextField source="avatar_url" />
      <ReferenceField source="type_id" reference="cover_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="owner_id" />
      <TextField source="url" />
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="is_default" />
    </SimpleShowLayout>
  </Show>
);
