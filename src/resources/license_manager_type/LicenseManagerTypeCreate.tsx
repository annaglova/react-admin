import { Create, SimpleForm, TextInput } from "react-admin";

export const LicenseManagerTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
