import { TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const UnitCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="short_name" validate={[]} />
      </>
    }
  />
);
