import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const BreedGroupShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="code" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
