import { Edit, ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export const AwardInCompetitionEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="award_id" reference="award">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="competition_id" reference="competition">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
