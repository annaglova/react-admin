import { Create, ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export const AwardInCompetitionCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="award_id" reference="award">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="competition_id" reference="competition">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
