import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const ActivityResultCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="business_process_only" />
    </SimpleForm>
  </Create>
);
