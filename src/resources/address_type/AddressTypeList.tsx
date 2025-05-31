import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AddressTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="for_contact" />
      <BooleanField source="for_account" />
      <TextField source="color" />
    </SimpleShowLayout>
  </Show>
);
