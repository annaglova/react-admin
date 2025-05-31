import { BooleanInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const RelationTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <BooleanInput source="for_contact_contact" />
      <BooleanInput source="for_account_contact" />
      <BooleanInput source="for_contact_account" />
      <BooleanInput source="for_account_account" />
      <ReferenceInput source="reverse_relation_type_id" reference="relation_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="include_into_container" />
    </SimpleForm>
  </Create>
);
