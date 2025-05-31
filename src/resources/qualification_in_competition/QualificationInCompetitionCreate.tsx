import { Create, ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export const QualificationInCompetitionCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="pet_qualification_id" reference="pet_qualification">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="competition_id" reference="competition">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
