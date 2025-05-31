import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const AccountOwnershipEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="country_id" reference="country">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
