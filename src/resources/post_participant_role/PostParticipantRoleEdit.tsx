import { Edit, SimpleForm, TextInput } from "react-admin";

export const PostParticipantRoleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
