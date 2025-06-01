import { Edit, ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export const CoatColorInBreedEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="breed_id" reference="breed">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="coat_color_id" reference="coat_color">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
