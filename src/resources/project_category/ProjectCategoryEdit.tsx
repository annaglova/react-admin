import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ProjectCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="event_type_id" reference="event_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
