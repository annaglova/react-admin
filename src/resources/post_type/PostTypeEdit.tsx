import { Edit, SimpleForm, TextInput } from "react-admin";

export const PostTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="template_text" />
    </SimpleForm>
  </Edit>
);
