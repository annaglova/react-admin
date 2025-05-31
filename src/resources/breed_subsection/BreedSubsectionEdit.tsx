import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const BreedSubsectionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="breed_section_id" reference="breed_section">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="breed_group_id" reference="breed_group">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="code" />
    </SimpleForm>
  </Edit>
);
