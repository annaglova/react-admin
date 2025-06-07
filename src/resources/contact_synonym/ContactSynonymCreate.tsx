import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactSynonymCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="contact_id" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="flag" validate={[]} />
      </>
    }
  />
);
