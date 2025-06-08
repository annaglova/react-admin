import { TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const DepartmentEdit = () => (
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
        
      </>
    }
  />
);
