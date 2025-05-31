import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ActivityResultEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="business_process_only" />
    </SimpleForm>
  </Edit>
);
