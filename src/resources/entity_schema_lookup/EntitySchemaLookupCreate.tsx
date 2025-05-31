import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const EntitySchemaLookupCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_public" />
      <TextInput source="public_name" />
    </SimpleForm>
  </Create>
);
