import { NumberInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const TimeUnitCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <NumberInput source="position" validate={[]} />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="code" validate={[]} />
      </>
    }
  />
);
