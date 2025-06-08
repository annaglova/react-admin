import { BooleanInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const AddressTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="for_contact"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="for_account"  />
          <TextInput source="color"  />
      </>
    }
  />
);
