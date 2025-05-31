import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const QuestStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <NumberInput source="order" />
    </SimpleForm>
  </Create>
);
