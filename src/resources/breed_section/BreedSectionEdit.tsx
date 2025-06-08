import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedSectionEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="code"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="breed_group_id" reference="breed_group">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
  />
);
