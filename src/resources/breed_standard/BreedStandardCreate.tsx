import { BooleanInput, Create, DateInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const BreedStandardCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="subsection_id" reference="breed_subsection">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="section_id" reference="breed_section">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="group_id" reference="breed_group">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="code" />
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="breed_id" reference="breed">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="effective" />
      <DateInput source="approved" />
      <TextInput source="link" />
      <BooleanInput source="working_trial" />
      <ReferenceInput source="status_id" reference="breed_standard_status">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="has_variable_divisions" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
