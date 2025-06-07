import { BooleanInput, DateInput, ReferenceInput, SelectInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CollectionCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <BooleanInput source="private" validate={[]} />
          <TextInput source="entity_name" validate={[]} />
          <BooleanInput source="auto" validate={[]} />
          <ReferenceInput source="type_id" reference="collection_type">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="avatar_url" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="url" validate={[]} />
          <TextInput source="notes" validate={[]} />
          <DateInput source="update_date" validate={[]} />
          <ReferenceInput source="cover_id" reference="cover">
  <SelectInput optionText="name" validate={[]} />
</ReferenceInput>
          <TextInput source="owner_id" validate={[]} />
      </>
    }
  />
);
