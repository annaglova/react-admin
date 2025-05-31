import { BooleanInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const CoverCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="notes" />
      <TextInput source="redirect_url" />
      <TextInput source="avatar_url" />
      <ReferenceInput source="type_id" reference="cover_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="owner_id" />
      <TextInput source="url" />
      <ReferenceInput source="breed_id" reference="breed">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="is_default" />
    </SimpleForm>
  </Create>
);
