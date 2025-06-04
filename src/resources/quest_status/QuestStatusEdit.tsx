import { NumberInput, TextInput } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const QuestStatusEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" />
          <TextInput source="code" />
      </>
    }
    fieldsRight={
      <>
        <NumberInput source="order" />
      </>
    }
  />
);
