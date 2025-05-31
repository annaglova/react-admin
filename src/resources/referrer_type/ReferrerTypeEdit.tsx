import { Edit, SimpleForm, TextInput } from "react-admin";

export const ReferrerTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="matomo_code" />
    </SimpleForm>
  </Edit>
);
