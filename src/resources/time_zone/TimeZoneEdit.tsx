import { Edit, SimpleForm, TextInput } from "react-admin";

export const TimeZoneEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <TextInput source="offset" />
      <TextInput source="code_american" />
    </SimpleForm>
  </Edit>
);
