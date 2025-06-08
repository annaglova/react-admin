import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const BreedSectionCreate = () => (
  <ResourceCreateLayout
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
