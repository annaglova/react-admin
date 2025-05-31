import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ProjectStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_final" />
    </SimpleForm>
  </Edit>
);
