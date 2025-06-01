import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CollectionCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <BooleanInput source="private" />
          <TextInput source="entity_name" />
          <BooleanInput source="auto" />
          <ReferenceInput source="type_id" reference="collection_type">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="avatar_url" />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="url" />
          <TextInput source="notes" />
          <DateInput source="update_date" />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" />
</ReferenceInput>
          <TextInput source="owner_id" />
      </>
    }
  />
);
