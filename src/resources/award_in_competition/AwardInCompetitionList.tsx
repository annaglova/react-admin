import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AwardInCompetitionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="award_id" reference="award">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="competition_id" reference="competition">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
