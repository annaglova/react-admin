import { Edit, SimpleForm, TextInput } from "react-admin";

export const ReferralLinkEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="contact_id" />
      <TextInput source="code" />
    </SimpleForm>
  </Edit>
);
