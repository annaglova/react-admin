import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const SysLanguageEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="code" />
      <BooleanInput source="is_used" />
      <TextInput source="sys_culture_def_id" />
    </SimpleForm>
  </Edit>
);
