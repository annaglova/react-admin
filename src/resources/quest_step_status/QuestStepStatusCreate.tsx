import { Create, SimpleForm, TextInput } from "react-admin";

export const QuestStepStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
    </SimpleForm>
  </Create>
);
