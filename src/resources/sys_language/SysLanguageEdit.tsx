import { BooleanInput, TextInput ,   } from "react-admin";
import { ResourceEditLayout } from "@/layouts/ResourceEditLayout";

export const SysLanguageEdit = () => (
  <ResourceEditLayout
    name={
      <>{<TextInput source="name" validate={[required()]} />}</>
    }
    fieldsLeft={
      <>
        <TextInput source="description"  />
          <TextInput source="code" validate={[required()]} />
      </>
    }
    fieldsRight={
      <>
        <BooleanInput source="is_used"  />
          <TextInput source="sys_culture_def_id"  />
      </>
    }
  />
);
