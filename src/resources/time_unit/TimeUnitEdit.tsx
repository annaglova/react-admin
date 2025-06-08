import { NumberInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const TimeUnitEdit = () => (
  <ResourceEditLayout
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
