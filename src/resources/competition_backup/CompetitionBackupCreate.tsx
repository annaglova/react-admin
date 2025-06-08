import { BooleanInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CompetitionBackupCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="exists_award"  />
          <BooleanInput source="exists_place"  />
          <BooleanInput source="exists_qualification"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="type_id" reference="competition_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
