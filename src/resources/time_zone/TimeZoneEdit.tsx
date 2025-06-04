import { TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TimeZoneEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <TextInput source="code" />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="offset" />
          <TextInput source="code_american" />
      </>
    }
  />
);
