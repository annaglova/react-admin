import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const AddressTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="for_contact" />
      <BooleanInput source="for_account" />
      <TextInput source="color" />
    </SimpleForm>
  </Create>
);
