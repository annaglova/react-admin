import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const BreedSectionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="code" />
      <ReferenceField source="breed_group_id" reference="breed_group">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
