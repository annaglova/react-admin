import { BooleanInput, NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const CoverTypeCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <NumberInput source="priority" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="system" validate={[]} />
      </>
    }
  />
);
