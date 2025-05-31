import { Create, SimpleForm, TextInput } from "react-admin";

export const ActivityPriorityCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="img" />
    </SimpleForm>
  </Create>
);
