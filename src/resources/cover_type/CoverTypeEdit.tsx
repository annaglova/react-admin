import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const CoverTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="priority" />
      <BooleanInput source="system" />
    </SimpleForm>
  </Edit>
);
