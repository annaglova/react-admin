import { BooleanInput, NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const CoverTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <NumberInput source="priority" />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="system" />
      </>
    }
  />
);
