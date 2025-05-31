import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const BreedSubsectionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField source="breed_section_id" reference="breed_section">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_group_id" reference="breed_group">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="code" />
    </SimpleShowLayout>
  </Show>
);
