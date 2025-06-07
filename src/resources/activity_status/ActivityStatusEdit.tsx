import { BooleanInput, TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ActivityStatusEdit = () => (
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
        <BooleanInput source="finish"  />
          <TextInput source="color"  />
      </>
    }
  />
);
