import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const AccountTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="priority" />
      <TextInput source="raw_data_model" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
