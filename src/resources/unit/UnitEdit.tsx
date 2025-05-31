import { Edit, SimpleForm, TextInput } from "react-admin";

export const UnitEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="short_name" />
    </SimpleForm>
  </Edit>
);
