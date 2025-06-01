import { NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const AccountTypeCreate = () => (
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
        <TextInput source="raw_data_model" />
          <TextInput source="color" />
      </>
    }
  />
);
