import { BooleanInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoverEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="notes" />
          <TextInput source="redirect_url" />
          <TextInput source="avatar_url" />
          <ReferenceInput source="type_id" reference="cover_type">
  <SelectInput optionText="name" />
</ReferenceInput>
      </>
    }
    fieldsRight={
      <>
        <TextInput source="owner_id" />
          <TextInput source="url" />
          <ReferenceInput source="breed_id" reference="breed">
  <SelectInput optionText="name" />
</ReferenceInput>
          <BooleanInput source="is_default" />
      </>
    }
  />
);
