import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const LitterStatusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="order" />
    </SimpleForm>
  </Edit>
);
