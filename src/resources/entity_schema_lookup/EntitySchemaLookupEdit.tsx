import { BooleanInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const EntitySchemaLookupEdit = () => (
  <ResourceEditLayout
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
