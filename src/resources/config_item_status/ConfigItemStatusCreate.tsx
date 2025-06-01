import { BooleanInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ConfigItemStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <BooleanInput source="is_final" />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="active" />
      </>
    }
  />
);
