import { Create, SimpleForm, TextInput } from "react-admin";

export const LicenseManagerManageTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
