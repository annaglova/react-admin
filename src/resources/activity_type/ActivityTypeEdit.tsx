import { Edit, SimpleForm, TextInput } from "react-admin";

export const ActivityTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <TextInput source="type_image" />
    </SimpleForm>
  </Edit>
);
