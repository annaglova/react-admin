import { TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const TimeZoneCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <TextInput source="code" validate={[required()]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="offset" validate={[]} />
          <TextInput source="code_american" validate={[]} />
      </>
    }
  />
);
