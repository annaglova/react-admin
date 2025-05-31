import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const QualificationInCompetitionShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="pet_qualification_id" reference="pet_qualification">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="competition_id" reference="competition">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
