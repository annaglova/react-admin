import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const CoatColorEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
