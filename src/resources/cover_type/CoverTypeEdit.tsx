import { BooleanInput, NumberInput, TextInput, required } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const CoverTypeEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={required()} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <NumberInput source="priority"  />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="system"  />
      </>
    }
  />
);
