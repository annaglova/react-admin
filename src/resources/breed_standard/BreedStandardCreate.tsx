import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const BreedStandardCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="subsection_id" reference="breed_subsection">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="section_id" reference="breed_section">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="group_id" reference="breed_group">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="code" validate={[]} />
          <ReferenceInput source="provider_id" reference="account">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <DateInput source="effective" validate={[]} />
          <DateInput source="approved" validate={[]} />
          <TextInput source="link" validate={[]} />
          <BooleanInput source="working_trial" validate={[]} />
          <ReferenceInput source="status_id" reference="breed_standard_status">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="has_variable_divisions" validate={[]} />
      </>
    }
  />
);
