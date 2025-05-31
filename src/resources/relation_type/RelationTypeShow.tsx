import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const RelationTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="for_contact_contact" />
      <BooleanField source="for_account_contact" />
      <BooleanField source="for_contact_account" />
      <BooleanField source="for_account_account" />
      <ReferenceField source="reverse_relation_type_id" reference="relation_type">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="include_into_container" />
    </SimpleShowLayout>
  </Show>
);
