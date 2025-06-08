import { TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const ActivityTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="code"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="type_image"  />
      </>
    }
  />
);
