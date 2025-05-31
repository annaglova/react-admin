import { Edit, SimpleForm, TextInput } from "react-admin";

export const QuestFrequencyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
    </SimpleForm>
  </Edit>
);
