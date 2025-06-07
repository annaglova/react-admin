import { TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ActivityTypeEdit = () => (
  <ResourceEditLayout
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
