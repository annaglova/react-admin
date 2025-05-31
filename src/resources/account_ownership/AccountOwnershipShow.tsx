import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AccountOwnershipShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="country_id" reference="country">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
