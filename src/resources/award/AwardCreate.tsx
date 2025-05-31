import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const AwardCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="pet_type_id" reference="pet_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
