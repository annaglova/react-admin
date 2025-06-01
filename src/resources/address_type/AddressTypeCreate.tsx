import { BooleanInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const AddressTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <BooleanInput source="for_contact" />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="for_account" />
          <TextInput source="color" />
      </>
    }
  />
);
