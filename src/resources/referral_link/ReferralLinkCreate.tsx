import { Create, SimpleForm, TextInput } from "react-admin";

export const ReferralLinkCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="contact_id" />
      <TextInput source="code" />
    </SimpleForm>
  </Create>
);
