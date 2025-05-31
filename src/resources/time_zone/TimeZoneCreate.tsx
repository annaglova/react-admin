import { Create, SimpleForm, TextInput } from "react-admin";

export const TimeZoneCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <TextInput source="offset" />
      <TextInput source="code_american" />
    </SimpleForm>
  </Create>
);
