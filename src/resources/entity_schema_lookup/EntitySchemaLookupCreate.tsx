import { BooleanInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const EntitySchemaLookupCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <BooleanInput source="is_public" />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="public_name" />
      </>
    }
  />
);
