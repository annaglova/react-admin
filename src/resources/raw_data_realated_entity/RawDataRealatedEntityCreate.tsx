import { NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const RawDataRealatedEntityCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="priority" />
      </>
    }
  />
);
