import { BooleanInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CoverCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" validate={[]} />
          <TextInput source="redirect_url" validate={[]} />
          <TextInput source="avatar_url" validate={[]} />
          <ReferenceInput source="type_id" reference="cover_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="owner_id" validate={[]} />
          <TextInput source="url" validate={[]} />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <BooleanInput source="is_default" validate={[]} />
      </>
    }
  />
);
