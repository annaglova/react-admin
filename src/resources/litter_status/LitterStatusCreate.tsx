import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const LitterStatusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="order" />
    </SimpleForm>
  </Create>
);
