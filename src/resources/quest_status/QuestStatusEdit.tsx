import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const QuestStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <NumberInput source="order" />
    </SimpleForm>
  </Edit>
);
