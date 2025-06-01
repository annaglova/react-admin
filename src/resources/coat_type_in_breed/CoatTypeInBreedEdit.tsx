import { Edit, ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export const CoatTypeInBreedEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="breed_id" reference="breed">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="coat_type_id" reference="coat_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
