import { BooleanInput, TextInput } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";

export const SysLanguageCreate = () => (
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
        <BooleanInput source="is_used" />
          <TextInput source="sys_culture_def_id" />
      </>
    }
  />
);
