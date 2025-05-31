import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const PostFeedCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="pet_id" />
      <ReferenceInput source="account_id" reference="account">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="contact_id" reference="contact">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="litter_id" reference="litter">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="pet_breed_id" />
    </SimpleForm>
  </Create>
);
