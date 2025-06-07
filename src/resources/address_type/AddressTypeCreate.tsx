import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const AddressTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="for_contact" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="for_account" validate={[]} />
          <TextInput source="color" validate={[]} />
      </>
    }
  />
);
