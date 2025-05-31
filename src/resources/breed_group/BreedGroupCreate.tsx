import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const BreedGroupCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="code" />
      <ReferenceInput source="provider_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
