import { BooleanInput, TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PetIdentifierTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_public"  />
      </>
    }
  />
);
