import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PetStatusShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="code" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
