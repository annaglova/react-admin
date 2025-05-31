import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const ProjectStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_final" />
    </SimpleForm>
  </Create>
);
