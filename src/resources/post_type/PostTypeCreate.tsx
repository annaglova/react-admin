import { Create, SimpleForm, TextInput } from "react-admin";

export const PostTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="template_text" />
    </SimpleForm>
  </Create>
);
