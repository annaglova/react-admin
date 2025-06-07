import { TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const LicenseManagerStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        
      </>
    }
  />
);
