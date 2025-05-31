import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ConfigItemStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_final" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);
