import { Edit, SimpleForm, TextInput } from "react-admin";

export const QuestStepStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
    </SimpleForm>
  </Edit>
);
