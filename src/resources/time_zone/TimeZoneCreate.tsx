import { TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const TimeZoneCreate = () => (
  <ResourceCreateLayout
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
