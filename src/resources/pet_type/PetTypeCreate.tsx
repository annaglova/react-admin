import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const PetTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="pet_profile_count" />
      <TextInput source="url" />
      <NumberInput source="organization_count" />
      <NumberInput source="profile_count" />
      <NumberInput source="patron_count" />
      <NumberInput source="kennel_count" />
      <TextInput source="avatar_url" />
      <NumberInput source="event_count" />
      <ReferenceInput source="public_data_id" reference="public_data">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
