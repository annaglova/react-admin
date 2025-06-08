import { NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const BreedSubsectionCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <ReferenceInput source="breed_section_id" reference="breed_section">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="breed_group_id" reference="breed_group">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <NumberInput source="code"  />
      </>
    }
  />
);
