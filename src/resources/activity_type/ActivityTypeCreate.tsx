import { Create, SimpleForm, TextInput } from "react-admin";

export const ActivityTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <TextInput source="type_image" />
    </SimpleForm>
  </Create>
);
