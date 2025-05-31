// АВТОМАТИЧНО ЗГЕНЕРОВАНО! 
import { TextField, BooleanField, DateField } from "react-admin";
import { Labeled } from "@/components/Labeled";
import { LookupResourceShowLayout } from "@/layouts/LookupResourceShowLayout";

export const SysLanguageShow = ({ record }: any) => (
  <LookupResourceShowLayout
    name={
      <Labeled label="Name" value={<TextField source="name" />} />
    }
    id={
      <Labeled label="ID" value={<TextField source="id" />} />
    }
    fieldsLeft={
      <>
        <Labeled label="Description" value={<TextField source="description" />} />
        <Labeled label="Code" value={<TextField source="code" />} />
      </>
    }
    fieldsRight={
      <>
        <Labeled label="Is Used" value={<BooleanField source="is_used" />} />
        <Labeled label="Sys Culture Def Id" value={<TextField source="sys_culture_def_id" />} />
      </>
    }
  />
);
