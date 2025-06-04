import { BooleanInput, NumberInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoverTypeEdit = () => (
  <ResourceEditLayout
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
