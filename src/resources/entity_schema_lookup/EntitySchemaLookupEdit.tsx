import { BooleanInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const EntitySchemaLookupEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="is_public"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="public_name"  />
      </>
    }
  />
);
