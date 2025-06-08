import { NumberInput, TextInput, required } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const TimeUnitCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name"  />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="position"  />
      </>
    }
    fieldsRight={
      <>
        <TextInput source="code"  />
      </>
    }
  />
);
