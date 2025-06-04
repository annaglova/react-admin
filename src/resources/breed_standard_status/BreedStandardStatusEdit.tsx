import { ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedStandardStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
  />
);
