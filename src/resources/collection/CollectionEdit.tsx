import { BooleanInput, DateInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const CollectionEdit = () => (
  <Edit>
    <SimpleForm>
      <BooleanInput source="private" />
      <TextInput source="entity_name" />
      <BooleanInput source="auto" />
      <ReferenceInput source="type_id" reference="collection_type">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="avatar_url" />
      <TextInput source="url" />
      <TextInput source="name" />
      <TextInput source="notes" />
      <DateInput source="update_date" />
      <ReferenceInput source="cover_id" reference="cover">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="owner_id" />
    </SimpleForm>
  </Edit>
);
