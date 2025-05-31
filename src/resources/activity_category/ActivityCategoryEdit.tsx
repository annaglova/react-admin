import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ActivityCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="activity_type_id" reference="activity_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
