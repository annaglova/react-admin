import { BooleanInput, TextInput, required , } from "react-admin";
import { ResourceCreateLayout } from "@/layouts/ResourceCreateLayout";


export const SysLanguageCreate = () => (
  <ResourceCreateLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description" validate={[]} />
          <TextInput source="code" validate={[required()]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_used" validate={[]} />
          <TextInput source="sys_culture_def_id" validate={[]} />
      </>
    }
  />
);
