import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const StudbookShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="account_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="status_id" reference="studbook_status">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="type_id" reference="studbook_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="alternate_names" />
    </SimpleShowLayout>
  </Show>
);
