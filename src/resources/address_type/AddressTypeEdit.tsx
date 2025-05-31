import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const AddressTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="for_contact" />
      <BooleanInput source="for_account" />
      <TextInput source="color" />
    </SimpleForm>
  </Edit>
);
