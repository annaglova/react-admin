import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const ConfigItemStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_final" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Create>
);
