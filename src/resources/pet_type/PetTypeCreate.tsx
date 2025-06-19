import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const PetTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="url"  />
          <TextInput source="avatar_url"  />
      </>
    }
    fieldsRight={
      <>
        <ReferenceInput source="public_data_id" reference="public_data">
  <SelectInput optionText="name"  />
</ReferenceInput>
          <TextInput source="measurements"  />
      </>
    }
  />
);
