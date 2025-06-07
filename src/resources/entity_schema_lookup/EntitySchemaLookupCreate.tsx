import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const EntitySchemaLookupCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="is_public" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="public_name" validate={[]} />
      </>
    }
  />
);
