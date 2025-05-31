import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const SexShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" />
      <NumberField source="order" />
    </SimpleShowLayout>
  </Show>
);
