import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const HealthExamResultEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="object_id" reference="health_exam_object">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
