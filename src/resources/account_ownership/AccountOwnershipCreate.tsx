import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const AccountOwnershipCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="country_id" reference="country">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
