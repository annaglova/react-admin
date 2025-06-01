import { NumberInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const QuestStatusCreate = () => (
  <ResourceCreateLayout
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
