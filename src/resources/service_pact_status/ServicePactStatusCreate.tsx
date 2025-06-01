import { BooleanInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ServicePactStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <BooleanInput source="is_active" />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="color" />
      </>
    }
  />
);
