import { BooleanInput, NumberInput, ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const BreedEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <ReferenceInput source="pet_type_id" reference="pet_type">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <BooleanInput source="differ_by_coat_color"  />
          <BooleanInput source="differ_by_coat_type"  />
          <BooleanInput source="differ_by_size"  />
          <ReferenceInput source="language_id" reference="sys_language">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="authentic_name"  />
          <BooleanInput source="differ_by_body_feature"  />
          <NumberInput source="pet_profile_count"  />
          <ReferenceInput source="category_id" reference="breed_category">
  <SelectInput optionText="name"  />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="has_related_breed"  />
          <TextInput source="admin_name"  />
          <TextInput source="url"  />
          <ReferenceInput source="account_id" reference="account">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="avatar_url"  />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="measurements"  />
      </>
    }
  />
);
