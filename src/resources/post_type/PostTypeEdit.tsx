import { TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const PostTypeEdit = () => (
  <ResourceEditLayout
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
        <TextInput source="template_text" />
      </>
    }
  />
);
