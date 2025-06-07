import { BooleanInput, TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ConfigItemStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="is_final"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="active"  />
      </>
    }
  />
);
