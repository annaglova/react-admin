import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ServicePactStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_active" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
