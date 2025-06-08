import { TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TimeZoneEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="code" validate={required()} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="offset"  />
          <TextInput source="code_american"  />
      </>
    }
  />
);
