import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const ServicePactStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="is_active" />
      <TextInput source="color" />
    </SimpleForm>
  </Create>
);
