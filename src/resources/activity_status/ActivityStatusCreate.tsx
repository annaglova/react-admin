import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ActivityStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <TextInput source="code" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="finish" validate={[]} />
          <TextInput source="color" validate={[]} />
      </>
    }
  />
);
