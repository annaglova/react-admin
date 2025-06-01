import { ReferenceInput, SelectInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const QualificationInCompetitionCreate = () => (
  <ResourceCreateLayout
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
