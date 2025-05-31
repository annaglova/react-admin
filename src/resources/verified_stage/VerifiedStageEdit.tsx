import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const VerifiedStageEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="priority" />
    </SimpleForm>
  </Edit>
);
