import { TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ReferrerTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="matomo_code"  />
      </>
    }
  />
);
