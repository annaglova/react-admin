import { Create, SimpleForm, TextInput } from "react-admin";

export const AffixTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
