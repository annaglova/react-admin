import { Edit, SimpleForm, TextInput } from "react-admin";

export const ActivityPriorityEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="img" />
    </SimpleForm>
  </Edit>
);
