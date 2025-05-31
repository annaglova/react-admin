import { Create, SimpleForm, TextInput } from "react-admin";

export const ReferrerTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="matomo_code" />
    </SimpleForm>
  </Create>
);
