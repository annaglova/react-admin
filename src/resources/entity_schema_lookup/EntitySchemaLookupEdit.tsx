import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const EntitySchemaLookupEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_public" />
      <TextInput source="public_name" />
    </SimpleForm>
  </Edit>
);
