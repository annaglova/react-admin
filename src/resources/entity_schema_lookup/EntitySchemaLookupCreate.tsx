import { BooleanInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const EntitySchemaLookupCreate = () => (
  <ResourceCreateLayout
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
