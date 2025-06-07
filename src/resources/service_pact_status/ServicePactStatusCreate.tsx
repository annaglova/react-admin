import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const ServicePactStatusCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <BooleanInput source="is_active" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="color" validate={[]} />
      </>
    }
  />
);
