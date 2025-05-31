import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CompetitionBackupShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="exists_award" />
      <BooleanField source="exists_place" />
      <BooleanField source="exists_qualification" />
      <ReferenceField source="pet_type_id" reference="pet_type">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="provider_id" reference="account">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="type_id" reference="competition_type">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
