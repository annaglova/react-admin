import { Edit, SimpleForm, TextInput } from "react-admin";

export const AffixTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
