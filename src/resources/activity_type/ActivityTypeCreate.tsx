import { TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ActivityTypeCreate = () => (
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
        <TextInput source="type_image" validate={[]} />
      </>
    }
  />
);
