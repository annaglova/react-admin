import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const BreedStandardShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="subsection_id" reference="breed_subsection">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="section_id" reference="breed_section">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="group_id" reference="breed_group">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="code" />
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="breed_id" reference="breed">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="effective" />
      <DateField source="approved" />
      <TextField source="link" />
      <BooleanField source="working_trial" />
      <ReferenceField source="status_id" reference="breed_standard_status">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="has_variable_divisions" />
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);
