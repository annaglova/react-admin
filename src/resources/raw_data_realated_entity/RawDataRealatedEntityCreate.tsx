import { NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const RawDataRealatedEntityCreate = () => (
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
        <NumberInput source="priority" validate={[]} />
      </>
    }
  />
);
