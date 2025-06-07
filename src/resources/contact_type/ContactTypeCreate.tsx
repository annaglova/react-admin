import { TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ContactTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="color" validate={[]} />
      </>
    }
  />
);
