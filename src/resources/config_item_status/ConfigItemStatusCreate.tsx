import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ConfigItemStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="is_final" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="active" validate={[]} />
      </>
    }
  />
);
