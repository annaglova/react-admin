import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedSynonymEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="language_id" reference="sys_language">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
