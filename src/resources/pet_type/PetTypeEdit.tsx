import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetTypeEdit = () => (
  <ResourceEditLayout
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
