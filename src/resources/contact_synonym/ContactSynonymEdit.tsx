import { BooleanInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ContactSynonymEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="flag"  />
      </>
    }
  />
);
