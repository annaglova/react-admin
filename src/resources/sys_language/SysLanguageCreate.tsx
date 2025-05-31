import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const SysLanguageCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <BooleanInput source="is_used" />
      <TextInput source="sys_culture_def_id" />
    </SimpleForm>
  </Create>
);
