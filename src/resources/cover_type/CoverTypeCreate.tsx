import { BooleanInput, Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const CoverTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="priority" />
      <BooleanInput source="system" />
    </SimpleForm>
  </Create>
);
