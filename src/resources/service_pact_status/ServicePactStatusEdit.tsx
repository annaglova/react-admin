import { BooleanInput, TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const ServicePactStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <BooleanInput source="is_active"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="color"  />
      </>
    }
  />
);
