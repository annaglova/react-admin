import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const HealthExamResultCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="object_id" reference="health_exam_object">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
