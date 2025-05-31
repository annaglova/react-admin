import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const BreedStandardStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
