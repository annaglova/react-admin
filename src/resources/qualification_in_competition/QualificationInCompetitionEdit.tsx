import { ReferenceInput, SelectInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const QualificationInCompetitionEdit = () => (
  <ResourceEditLayout
    name={
      null
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_qualification_id" reference="pet_qualification">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="competition_id" reference="competition">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
